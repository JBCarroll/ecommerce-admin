import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      new NextResponse("Name is requred", { status: 400 });
    }

    const user = await prismadb.user.create({
      data: {
        name,
      }
    })

    return NextResponse.json(user);
  } catch (error) {
    console.log('[USERS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
