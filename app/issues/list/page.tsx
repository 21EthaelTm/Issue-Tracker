import { Status } from "@/app/generated/prisma/enums";
import TableComponent from "../_Components/Tablecomponent";
import IssuesAction from "./IssuesAction";
import { Issue } from "@/app/generated/prisma/browser";
import { prisma } from "@/prisma/client";
import { colomuns } from "../_Components/Tablecomponent";
import Pagination from "@/app/components/Pagination";
interface props {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue,page:string }>;
}

const IssuePage = async ({ searchParams }: props) => {
  const params = await searchParams;
  const status = params.status;
  const page = parseInt(params.page)|| 1;
  const pageSize = 10;
  const confirmSearchParamas = Object.values(Status).includes(status)
    ? status
    : undefined;
    const where = {status:confirmSearchParamas}
  const orderBy = colomuns.map((cols) => cols.value).includes(params.orderBy)
    ? { [params.orderBy]: "asc" }
    : undefined;
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page-1)*pageSize,
    take:pageSize
  });
  const totalUsers = await prisma.issue.count({where});
  return (
    <div>
      <IssuesAction />
      <TableComponent issues={issues} searchParams={searchParams} />
      <Pagination currentPage={page} pageSize={pageSize} itemCount={totalUsers}/>
    </div>
  );
};

export default IssuePage;
