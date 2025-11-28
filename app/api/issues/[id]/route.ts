import { IssueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  Request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await Request.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 }
    );
  const id = parseInt((await params).id);
  const issues = await prisma.issue.findUnique({
    where: { id: id },
  });
  if (!issues) {
    return NextResponse.json({ error: "Invalide Issue" }, { status: 404 });
  }
  const updatedIssue = await prisma.issue.update({
    where: { id: issues.id },
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(updatedIssue);
}
