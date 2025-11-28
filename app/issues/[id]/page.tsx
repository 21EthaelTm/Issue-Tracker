import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Heading, Table, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";

const displaySpecificIssue = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
    await delay(2000);
  const id = (await params).id;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <Heading mb={"3"} as="h2">
        {issue.title}
      </Heading>
      <div className=" flex gap-3 mb-3 items-center">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.CreatedAt.toDateString()}</Text>
      </div>
      <Card className="w-3xl prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default displaySpecificIssue;
