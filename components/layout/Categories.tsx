// npm
import Link from "next/link";

import { GET_CATEGORIES } from "@/lib/services";
import { getClient } from "@/lib/apollo/client";

import { badgeVariants } from "@/components/ui/badge";

import { Category } from "@/types";

const query = GET_CATEGORIES;

export default async function Categories() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <section className="flex flex-wrap gap-5">
      <Link href={`/blogs/`} className={badgeVariants({ variant: "default" })}>
        Blogs
      </Link>
      {data?.categories?.map((category: Category) => (
        <Link
          href={`/blogs/${category?.slug}`}
          className={badgeVariants({ variant: "secondary" })}
          key={category?.id}
        >
          {category?.name}
        </Link>
      ))}
    </section>
  );
}
