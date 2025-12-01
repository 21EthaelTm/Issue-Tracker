import authoption from "@/app/auth/authoption";
import { PatchIssueSchema } from "@/app/validationSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";


export async function PATCH(
  Request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await  getServerSession(authoption)
  if(!session){
    NextResponse.json({},{status:401})
  }

  const body = await Request.json();
  const validation = PatchIssueSchema.safeParse(body);
  const {assignedToUserId,title,description} = body;

  if(assignedToUserId){
    const user = await prisma.user.findUnique({ where:{id:assignedToUserId}});
    if(!user){
      NextResponse.json({error:"user unvailable"},{status:400})
    }
  }
  
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
    data: { title, description,assignedToUserId },
  });
  return NextResponse.json(updatedIssue);
}

 export async function DELETE(Request:NextResponse,{params}:{params:Promise<{id:string}>}){
  const session = await  getServerSession(authoption)
  if(!session){
    NextResponse.json({},{status:401})
  }
  const id = parseInt((await params).id);
  const issue = await prisma.issue.findUnique({
    where:{id:id}
  })
   if(!issue)
    return NextResponse.json({error:"Invalide Issue"});
  await prisma.issue.delete({
    where:{id:id}
  })
  return NextResponse.json({success:true})
 }


