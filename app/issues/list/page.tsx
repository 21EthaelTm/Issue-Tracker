import { Status } from "@/app/generated/prisma/enums";
import TableComponent from "../_Components/Tablecomponent";
import IssuesAction from "./IssuesAction";
import { Issue } from "@/app/generated/prisma/browser";
import { prisma } from "@/prisma/client";

interface props{
  searchParams: Promise<{status:Status,orderBy: keyof Issue}>
}

const IssuePage = async ({ searchParams}: props) => {
  const params = (await searchParams);
  const status = params.status;
  const issues = await prisma.issue.findMany({
    where:{status}
  })
  const confirmSearchParamas = Object.values(Status).includes(status)?status:undefined;
  return (
    <div>
      <IssuesAction />
      <TableComponent issues={issues}  searchParams={searchParams} />
    </div>
  );
};

export default IssuePage;
