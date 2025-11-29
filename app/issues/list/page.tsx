import TableComponent from "../../components/Tablecomponent";
import IssuesAction from "./IssuesAction";
const IssuePage = async () => {
  return (
    <div>
      <IssuesAction />
      <TableComponent />
    </div>
  );
};

export default IssuePage;
