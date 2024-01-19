import { Blog } from "@/types";
import BlogCard from "../shared/BlogCard";

type DataProps = {
  data: {
    posts: Blog[];
  };
};

export default function FeaturedBlogs({ data }: DataProps) {
  console.log(data);
  return data?.posts?.map((blog: Blog) => (
    <BlogCard blog={blog} key={blog?.id} />
  ));
}
