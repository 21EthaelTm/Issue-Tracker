import Image from "next/image";
import Pagination from "./components/Pagination";
export default async function Home({searchParams}:{searchParams:Promise<{page:string}>}) {
  const params = (await searchParams).page
  return (
    <div >
      <Pagination itemCount={100} currentPage={parseInt(params)} pageSize={10}/>
    </div>
  );
}
