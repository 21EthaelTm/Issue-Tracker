import { prisma } from "@/prisma/client";
import { AlertDialog, Box, Button, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

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
        <AlertDialog.Root>
	       <AlertDialog.Trigger>
        <DeleteIssueButton IssueId={issue.id}/>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description >
			Are you sure you want to Delete this Isseu? once deteled it cant be undone!
		</AlertDialog.Description>
        
        <Flex gap="3" mt="4" justify="center">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" color="red">
					Delete Issue
				</Button>
			</AlertDialog.Action>
		</Flex>
    </AlertDialog.Content>
        </AlertDialog.Root>
        </Flex>
      </Box>
    </Grid>
  );
};

export default displaySpecificIssue;
