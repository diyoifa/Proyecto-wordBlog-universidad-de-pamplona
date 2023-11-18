"use client";
// import Link from "next/link";
import dynamic from "next/dynamic";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "@/components/ui/use-toast";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, ChangeEvent, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
// import axios from "axios";
import blogServices from "@/services/blogServices";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  titulo: z.string().min(2, {
    message: "El nombre de usuario debe tener minimo 2 caracteres",
  }),
  catSlug: z.string({
    required_error: "Por favor selecciona una categoria",
  }),
});

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function SelectForm() {
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      catSlug: "",
      titulo: "",
    },
  });

  // const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [media, setMedia] = useState<string>("");
  const router = useRouter();

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                // console.log("Upload is paused");
                break;
              case "running":
                // console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // console.log(
            //   "🚀 ~ file: page.tsx:129 ~ upload ~ error:",
            //   error.message
            // );
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      }
    };

    file && upload();
  }, [file]);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
  }, []);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data);
    // console.log({ ...data, value, file });

    const post = {
      title: data.titulo,
      desc: value,
      img: media,
      slug: slugify(data.titulo),
      catSlug: data.catSlug || "estilo",
    };
    // console.log("🚀 ~ file: page.tsx:160 ~ onSubmit ~ post:", {...post})
    try {
      const res = await blogServices.createPost(post);
      // console.log("🚀 ~ file: page.tsx:160 ~ onSubmit ~ res:", res)
      if (showToast) {
        toast({
          title: "Blog created successfully",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              {/* <code className="text-white">{JSON.stringify(res, null, 2)}</code> */}
              ❤️
            </pre>
          ),
        });
      }
      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      }
    } catch (error) {
      // console.log("🚀 ~ file: page.tsx:165 ~ onSubmit ~ error:", error)
    }
  }

  return (
    <div className="my-0 mx-auto">
      <div className="mt-28">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-screen space-y-6 py-8 px-28"
          >
            <h1 className="text-2xl  py-2 px-0 text-left mb-1 mt-8 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">
              Nuevo post
            </h1>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="titulo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titulo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ingresa un titulo para tu post"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Este sera el titulo de tu post
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="catSlug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoria</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="estilo">estilo</SelectItem>
                          <SelectItem value="moda">moda</SelectItem>
                          <SelectItem value="comida">comida</SelectItem>
                          <SelectItem value="cultura">cultura</SelectItem>
                          <SelectItem value="viajes">viajes</SelectItem>
                          <SelectItem value="programacion">
                            programacion
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Selecciona una categoria para tu post
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Imagen</Label>
                  <Input
                    id="picture"
                    type="file"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      if (e.target.files) {
                        setFile(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <Button type="submit">Publicar</Button>
            </div>
          </form>
        </Form>
        <div className="flex flex-col relative px-28 text-center">
          <h1 className="text-center text-2xl  py-2 px-0  mb-1 mt-8 mx-0 bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">
            Cuerpo del post
          </h1>
          <div className="my-0 mx-auto w-full">
            <div className="mt-4">
              {ReactQuill && (
                <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={setValue} 
              />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
