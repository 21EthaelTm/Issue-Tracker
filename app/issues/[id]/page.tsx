import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import { getServerSession } from "next-auth";
import authoption from "@/app/auth/authoption";
import AssignSelect from "./AssigneeSelect";
const displaySpecificIssue = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session =await getServerSession(authoption)
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
      { session && <Box>
        <Flex direction="column" gap="4">
          <AssignSelect issue={issue}/>
        <EditIssueButton IssueId={issue.id}/>
        <DeleteIssueButton IssueId={issue.id}/>
        </Flex>
      </Box>}
    </Grid>
  );
};

export default displaySpecificIssue;
