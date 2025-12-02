import { Status } from "@/app/generated/prisma/enums";
import TableComponent from "../_Components/Tablecomponent";
import IssuesAction from "./IssuesAction";
import { Issue } from "@/app/generated/prisma/browser";
import { prisma } from "@/prisma/client";
import { colomuns } from "../_Components/Tablecomponent";
interface props {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue }>;
}

const IssuePage = async ({ searchParams }: props) => {
  const params = await searchParams;
  const status = params.status;
  const confirmSearchParamas = Object.values(Status).includes(status)
    ? status
    : undefined;
  const orderBy = colomuns.map((cols) => cols.value).includes(params.orderBy)
    ? { [params.orderBy]: "asc" }
    : undefined;
  const issues = await prisma.issue.findMany({
    where: { status: confirmSearchParamas },
    orderBy,
  });
  return (
    <div>
      <IssuesAction />
      <TableComponent issues={issues} searchParams={searchParams} />
    </div>
  );
};

export default IssuePage;
