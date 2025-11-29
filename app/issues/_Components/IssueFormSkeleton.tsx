import { Box } from '@radix-ui/themes'
import {Skeleton} from '@/app/components'
const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-lg">
      <Skeleton height="3em"></Skeleton>
      <Skeleton height="20em"></Skeleton>
    </Box>
  )
}

export default IssueFormSkeleton