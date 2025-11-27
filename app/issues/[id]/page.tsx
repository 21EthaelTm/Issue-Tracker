import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

const displaySpecificIssue = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>CreatedAT</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>UpdatedAT</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{issue?.id}</Table.Cell>
            <Table.Cell>
              {issue?.title}
              {/* <div className="block md:hidden">
          <IssueStatusBadge status= {issue?.status!}/>
        </div> */}
            </Table.Cell>
            <Table.Cell>{issue?.description}</Table.Cell>
            <Table.Cell>
              <IssueStatusBadge status={issue?.status!} />
            </Table.Cell>
            <Table.Cell>{issue?.CreatedAt.toDateString()} </Table.Cell>
            <Table.Cell>{issue?.UpdatedAT.toDateString()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default displaySpecificIssue;
