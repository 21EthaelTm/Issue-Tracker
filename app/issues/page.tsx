import TableComponent from "../components/Tablecomponent";
import IssuesAction from "./new/IssuesAction";
const IssuePage = async () => {

  return (
    <div>
      <IssuesAction/>
      <TableComponent/>
    </div>
  );
};

export default IssuePage;
