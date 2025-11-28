import { prisma } from "@/prisma/client";
import { Table } from '@radix-ui/themes';
import { IssueStatusBadge, Link } from './index';

const TableComponent = async () => {
  const submitedIssues = await prisma.issue.findMany();
  return (
    <Table.Root variant="surface">
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell className='hidden md:table-cell'>status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell className='hidden md:table-cell' >CreatedAT</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body>
	{submitedIssues.map((issues) =>(
    <Table.Row key={issues.id}>
			<Table.Cell> <Link href={`/issues/${issues.id}`}>{issues.title}</Link>
        <div className="block md:hidden">
          <IssueStatusBadge status= {issues.status}/>
        </div>
        {/* <div className="block md:hidden">{issues.CreatedAt.toDateString()}</div> */}
      </Table.Cell>
			<Table.Cell className='hidden md:table-cell'><IssueStatusBadge status= {issues.status}/>
        
      </Table.Cell>
			<Table.Cell className='hidden md:table-cell'>{issues.CreatedAt.toDateString()}
        
      </Table.Cell>
		</Table.Row>)
  )}
	</Table.Body>
</Table.Root>

  )
}

export default TableComponent