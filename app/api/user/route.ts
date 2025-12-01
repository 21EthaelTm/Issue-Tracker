import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(Request:NextRequest){
    const user = await prisma.user.findMany({orderBy:{name:'asc'}})
    return NextResponse.json(user,{status:200})
}