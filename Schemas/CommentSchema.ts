import * as z from 'zod'

export const commentSchema = z.object({
  content: z.string().min(8,{message:"Debe ingresar un comentario"}),
})

export type TypecommentSchema = z.infer<typeof commentSchema>;