import { NextRequest, NextResponse } from "next/server";
import { title } from "process";
import { prisma } from "../../../prisma/client";
import { createIssueSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
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
