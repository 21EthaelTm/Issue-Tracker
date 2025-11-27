import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import TableComponent from "../components/Tablecomponent";
//import { prisma } from "@/prisma/client";
const IssuePage = async () => {
 // const submitedIssues = await prisma.issue.findMany();

  return (
    <div>
      <div className="mb-3">
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
      </div>
      <TableComponent/>
    </div>
  );
};

export default IssuePage;
