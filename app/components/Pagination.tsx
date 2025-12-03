'use client'
import {
  ArrowBottomLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

interface props {
  itemCount: number;
  currentPage: number;
  pageSize: number;
}
const Pagination = ({ itemCount, currentPage, pageSize }: props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const router = useRouter();
  const searchParams = useSearchParams();

  if (pageCount <= 1) return null;
  const changePage = ((page:number) =>{
      const params = new URLSearchParams(searchParams);
      params.set('page',page.toString())
      router.push("?" + params.toString())
  })
  return (
    <Flex align="center" gap="3" className="mt-6" justify="center">
      <Text size='2'>
        page {currentPage} of {pageCount}{" "}
      </Text>
      <Button color="gray" variant="soft"  onClick={()=> changePage(1)} disabled={currentPage === 1}>
        <DoubleArrowLeftIcon/>
      </Button>
      <Button color="gray" variant="soft"  onClick={()=> changePage(currentPage-1)} disabled={currentPage === 1}>
        <ChevronLeftIcon/>
      </Button>
      <Button color="gray" variant="soft"  onClick={()=> changePage(currentPage+1)} disabled={currentPage === pageCount}>
        <ChevronRightIcon/>
      </Button>
      <Button color="gray" variant="soft" onClick={()=> changePage(pageCount)}   disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon/>
      </Button>
    </Flex>
  );
};

export default Pagination;
