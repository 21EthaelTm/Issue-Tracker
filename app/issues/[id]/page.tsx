import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Button, Card, Grid, Heading, Text,Box } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon} from "@radix-ui/react-icons"
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

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
    <Grid columns={{ initial: "1", md: "2" }} gap='3'>
      <Box>
      <IssueDetails issue={issue}/>
      </Box>
      <Box>
        <EditIssueButton IssueId={issue.id}/>
      </Box>
    </Grid>
  );
};

export default displaySpecificIssue;
