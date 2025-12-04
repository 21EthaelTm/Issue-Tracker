import Image from "next/image";
import IatestIssueComponent from './IatestIssueComponent'
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";
import IssueChart from "./IssueChart";
export default async function Home() {
 const openCount =await prisma.issue.count({where:{status:"open"}})
 const ClosedCount = await prisma.issue.count({where:{status:"closed"}})
 const In_ProgressCount = await prisma.issue.count({where:{status:"In_progress"}})
  return (
    <IssueChart closed={ClosedCount} inProgress={In_ProgressCount} open={openCount}/>
    //<IatestIssueComponent/>
  );
}
