import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import TableComponent from "../components/Tablecomponent";
import delay from "delay";
import IssuesAction from "./new/IssuesAction";
const IssuePage = async () => {
    //  await delay(2000);

  return (
    <div>
      <IssuesAction/>
      <TableComponent/>
    </div>
  );
};

export default IssuePage;
