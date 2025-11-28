import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Button, Card, Grid, Heading, Text,Box } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon} from "@radix-ui/react-icons"

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
      <Heading mb={"3"} as="h2">
        {issue.title}
      </Heading>
      <div className=" flex gap-3 mb-3 items-center">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.CreatedAt.toDateString()}</Text>
      </div>
      <Card className=" prose ">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon/>
          <Link href={`/issue/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default displaySpecificIssue;
