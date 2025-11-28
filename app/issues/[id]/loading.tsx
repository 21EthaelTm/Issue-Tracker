import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Card,Box } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
