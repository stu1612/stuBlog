// npm
import Image from "next/image";

import { getClient } from "@/lib/apollo/client";
import { GET_BLOG_BY_SLUG } from "@/lib/services";

import CMSRichText from "@/components/layout/CMSRichText";

type ParamsProp = {
  params: {
    slug: string;
  };
};

const query = GET_BLOG_BY_SLUG;

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
          {/* <div className="flex justify-center items-center  gap-4">
            <ShareButton />
          </div> */}
        </div>
      </section>
      <section>
        <CMSRichText content={content?.raw} />
      </section>
    </div>
  );
}
