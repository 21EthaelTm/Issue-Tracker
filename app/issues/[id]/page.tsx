import { prisma } from "@/prisma/client";
import { AlertDialog, Box, Button, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import axios from "axios";
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
    <Grid columns={{ initial: "1", sm: "5" }} gap='3'>
      <Box className="md:col-span-4">
      <IssueDetails issue={issue}/>
      </Box>
      <Box>
        <Flex direction="column" gap="4">
        <EditIssueButton IssueId={issue.id}/>
        <DeleteIssueButton IssueId={issue.id}/>
        </Flex>
      </Box>
    </Grid>
  );
};

export default displaySpecificIssue;
