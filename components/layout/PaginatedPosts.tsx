"use client";

// npm
import { useState, useEffect } from "react";

// files
import { Blog } from "@/types";
import BlogCard from "../shared/BlogCard";

// ui
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 3;

export default function PaginatedPosts({ data }: any) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    fetchPageData(currentPage);
  }, [currentPage, data]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchPageData(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPosts = data?.posts?.length || 0;
    const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

    if (currentPage < totalPages) {
      fetchPageData(currentPage + 1);
    }
  };

  const fetchPageData = (page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    if (data?.posts?.length > 0) {
      const slicedPosts = data.posts.slice(startIndex, endIndex);
      setPosts(slicedPosts);
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {posts?.map((blog: Blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePrevPage} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
