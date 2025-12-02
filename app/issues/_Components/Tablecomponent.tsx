import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { IssueStatusBadge } from "../../components/index";
import { Status } from "@/app/generated/prisma/enums";
import { Issue } from "@/app/generated/prisma/client";
import Link from 'next/link'
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface props{
  searchParams: Promise<{status:Status,orderBy:keyof Issue}>
  issues:Issue[]
}
export const colomuns: {
  local: string;
  value: keyof Issue;
  classname?: string;
}[] = [
  { local: "Issue", value: "title" },
  { local: "status", value: "status", classname: "hidden md:table-cell" },
  { local: "Created", value: "CreatedAt", classname: "hidden md:table-cell" },
];

const TableComponent = async ({issues,searchParams}:props) => {
 const params = await searchParams;
 
  //console.log(submitedIssues)
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {colomuns.map((list) => (
            <Table.ColumnHeaderCell key={list.value} className={list.classname}>
             <Link href={{query:{...params,orderBy:list.value}}}> {list.local} </Link>{list.value===params.orderBy && <ArrowUpIcon className="inline"/>}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
           
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.CreatedAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TableComponent;
