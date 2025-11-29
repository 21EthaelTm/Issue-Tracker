// 'use client'
import { Issue } from "@/app/generated/prisma/client";
import React from "react";
import IssueForm from "../../_Components/IssueForm";
import { string } from "zod";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
// import dynamic from "next/dynamic";
// import IssueFormSkeleton from "./loading";
// const IssueForm = dynamic(() => import("../../_Components/IssueForm"), {
//   ssr: false,
//   loading: () => <IssueFormSkeleton />,
// });
const EditIssuePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const dataToBeEdited = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!dataToBeEdited) notFound();
  return <IssueForm issue={dataToBeEdited} />;
};

export default EditIssuePage;
