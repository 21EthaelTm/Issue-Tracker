import { Skeleton } from "@/app/components";
import { Table } from "@radix-ui/themes";
import IssuesAction from "./IssuesAction";

const LoadingIsssue = () => {
  const submitedIssues = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <IssuesAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              CreatedAT
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {submitedIssues.map((issues) => (
            <Table.Row key={issues}>
              <Table.Cell>
                <Skeleton />
                <div className="block md:hidden">
                  <Skeleton />
                </div>
                {/* <div className="block md:hidden">{issues.CreatedAt.toDateString()}</div> */}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LoadingIsssue;
