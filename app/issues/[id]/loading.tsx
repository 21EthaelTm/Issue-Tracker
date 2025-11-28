import { Skeleton } from '@/app/components';
import { Box, Card } from "@radix-ui/themes";

const loadingSpecificIssue = () => {
  return (
    <Box className="max-w-lg">
      <Skeleton></Skeleton>
      <div className=" flex gap-3 mb-3 items-center">
        <Skeleton width="3em"></Skeleton>
        <Skeleton width="5em"></Skeleton>
      </div>
      <Card className="w-3xl prose">
        <Skeleton count={3}></Skeleton>
      </Card>
    </Box>
  );
};

export default loadingSpecificIssue;
