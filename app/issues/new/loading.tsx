import { Box } from "@radix-ui/themes";
import {Skeleton} from '@/app/components'
const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-lg">
      <Skeleton></Skeleton>
      <Skeleton height="20em"></Skeleton>
    </Box>
    
  );
};

export default LoadingNewIssuePage;