import { prisma } from "@/prisma/client";
import { Text, Flex, Table, Avatar, Card, Heading } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import { IssueStatusBadge } from "./components";

const IatestIssueComponent = async () => {
  const latestIssue = await prisma.issue.findMany({
    orderBy: { CreatedAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size='4' mb='5'>Latest Issue</Heading>
    <Table.Root>
      <Table.Body>
        {latestIssue.map((list) => (
          <Table.Row key={list.id}>
            <Table.Cell>
              <Flex justify="between">
                <Flex direction="column" align="start">
                  <Link href={`/issues/${list.id}`}>{list.title}</Link>
                  <IssueStatusBadge status={list.status}></IssueStatusBadge>
                </Flex>
                {list.assignedToUser && (
                  <Avatar src={list.assignedToUser?.image!} fallback={"?"} size="2" radius="full">
                    {}
                  </Avatar>
                )}
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Card>
  );
};

export default IatestIssueComponent;
