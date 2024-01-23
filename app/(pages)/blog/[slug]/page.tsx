// npm
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

import { getClient } from "@/lib/apollo/client";
import { GET_BLOG_BY_SLUG } from "@/lib/services";

import CMSRichText from "@/components/layout/CMSRichText";
import WebShare from "@/components/shared/WebShare";

type ParamsProp = {
  params: {
    slug: string;
  };
};

const query = GET_BLOG_BY_SLUG;

export async function generateMetadata({
  params,
}: ParamsProp): Promise<Metadata> {
  const { slug } = params;

  const { data } = await getClient().query({
    query,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const { id, title, image, createdAt, excerpt } = data?.post;

  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `stuBlog | ${title}`,
    description: excerpt,
    openGraph: {
      title: `stuBlog | ${title}`,
      description: excerpt,
      type: "article",
      publishedTime: createdAt,
      authors: ["Stuart Bolderson"],
      url: typeof window !== "undefined" ? window.location.href : "",
      images: [
        {
          url: image?.url,
          width: 800,
          height: 600,
          alt: title,
        },
        {
          url: image?.url,
          width: 1800,
          height: 1600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: excerpt,
      creator: "Stuart Bolderson",
      creatorId: id,
      images: [image?.url],
    },
  };
}

export default async function Blog({ params }: ParamsProp) {
  // properties
  const { slug } = params;

  const { data } = await getClient().query({
    query,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const { title, image, content, createdAt } = data?.post;

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <section>
        <div>
          <h1 className="h2-bold p-underline">{title}</h1>
          {/* <BlogCreatedAt createdAt={createdAt} /> */}
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mt-8 mb-8">
          <div className="h-40 w-full relative">
            <Image
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={image?.url}
              alt={title}
            />
          </div>
          <div className="flex justify-center items-center  gap-4">
            <WebShare data={data} />
          </div>
        </div>
      </section>
      <section>
        <CMSRichText content={content?.raw} />
      </section>
    </div>
  );
}
