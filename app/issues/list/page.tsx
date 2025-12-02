import { Status } from "@/app/generated/prisma/enums";
import TableComponent from "../_Components/Tablecomponent";
import IssuesAction from "./IssuesAction";
interface props{
searchParams: Promise< { status: Status }>;
}

const IssuePage = async ({ searchParams}: props) => {
  const statu = (await searchParams).status
  const confirmSearchParamas = Object.values(Status).includes(statu)?statu:undefined;
  return (
    <div>
      <IssuesAction />
      <TableComponent   props={confirmSearchParamas}/>
    </div>
  );
};

export default IssuePage;
