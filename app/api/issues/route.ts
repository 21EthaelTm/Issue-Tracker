import { NextRequest, NextResponse } from "next/server";
import { title } from "process";
import { prisma } from "../../../prisma/client";
import { IssueSchema } from "../../validationSchema";
import next from "next";
import { error } from "console";
import { success } from "zod";
import { getServerSession } from "next-auth";
import authoption from "@/app/auth/authoption";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authoption);
  if (!session) NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { errors: validation.error.issues },
      { status: 400 }
    );
  }

  const newissue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newissue, { status: 201 });
}
