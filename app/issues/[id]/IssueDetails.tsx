import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@/app/generated/prisma/client'
import { Card, Heading, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import DeleteIssueButton from './DeleteIssueButton'

const IssueDetails = ({issue}:{issue:Issue}) => {
  return (
    <>
    <Heading mb={"3"} as="h2">
        {issue.title}
      </Heading>
      <div className=" flex gap-3 mb-3 items-center">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.CreatedAt.toDateString()}</Text>
      </div>
      <Card className=" prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
      </>
  )
}

export default IssueDetails