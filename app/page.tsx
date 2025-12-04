import Image from "next/image";
import IatestIssueComponent from './IatestIssueComponent'
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
export default async function Home() {
 const openCount =await prisma.issue.count({where:{status:"open"}})
 const ClosedCount = await prisma.issue.count({where:{status:"closed"}})
 const In_ProgressCount = await prisma.issue.count({where:{status:"In_progress"}})
  return (
    <Grid columns={{initial:"1",md:"2"}} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary closed={ClosedCount} inProgress={In_ProgressCount} open={openCount}/>
      <IssueChart closed={ClosedCount} inProgress={In_ProgressCount} open={openCount}/>
      </Flex>
       <IatestIssueComponent/>
    </Grid>
    //
  );
}
export const  metadata:Metadata ={
  title:'Issue Tracker -Dashboard',
  description:'View a summary of project issues'
}