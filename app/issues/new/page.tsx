'use client'
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_Components/IssueFormSkeleton";
const IssueForm = dynamic(() => import("@/app/issues/_Components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton/>,
});

const newIssuPage = () => {
  return (
    <div className="max-w-xl ">
      <IssueForm />
    </div>
  );
};

export default newIssuPage;
