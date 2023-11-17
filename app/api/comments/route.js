import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");
  // console.log("🚀 ~ file: route.js:10 ~ GET ~ postSlug:", postSlug)

  try {
    
    // console.log('entr´+e')
    const comments = await prisma.comment.findMany({
      where: {
        // ...(postSlug && { postSlug }),
        postSlug: postSlug,
      },
      include: { user: true },
    });
    // console.log("🚀 ~ file: route.js:19 ~ GET ~ comments:", comments)

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  // console.log("🚀 ~ file: route.js:35 ~ POST ~ req:", req)
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    // console.log("🚀 ~ file: route.js:45 ~ POST ~ body:", body)
    
    const comment = await prisma.comment.create({
      data: {...body , userEmail: session.user.email},
    });
    // console.log("🚀 ~ file: route.js:49 ~ POST ~ comment:", comment)

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};