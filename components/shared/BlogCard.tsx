import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="mb-10">
      <Link href={`/blog/${blog?.slug}`} className="group">
        <div className="flex flex-col h-auto lg:grid lg:grid-cols-2 lg:min-h-[250px] lg:h-fit shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <figure className="relative h-[200px] lg:h-full">
            <Image
              src={blog?.image.url}
              alt={blog?.title}
              fill
              className="w-full"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
          <div className="flex-evenly-start flex-col px-5 py-10 sm:px-6 lg:px-12 lg:on-hover">
            <p className="p-medium-12">
              {/* <BlogCreatedAt createdAt={blog?.createdAt} /> -{" "} */}
              <span>{blog?.categories[0].name}</span>
            </p>
            {/* <h3 className="p-medium-24 py-2">
                  {truncateString(blog?.title, 40)}
                </h3> */}
            <h3 className="p-medium-24 py-2">{blog.title}</h3>
            {/* <p className="p-medium-18">{truncateString(blog?.excerpt, 80)}</p> */}
            <p className="p-medium-18">{blog?.excerpt}</p>
            <p className="p-medium-12 pt-2 p-underline lg:hidden">Read more</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
