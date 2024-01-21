// files
import { getClient } from "@/lib/apollo/client";
import { GET_BLOGS_BY_CATEGORY } from "@/lib/services";

import ContentWrapper from "@/components/layout/ContentWrapper";
import SubTitle from "@/components/shared/SubTitle";
import PaginatedBlogs from "@/components/layout/PaginatedBlogs";
import Categories from "@/components/layout/Categories";

type ParamProps = {
  params: {
    slug: string;
  };
};

const query = GET_BLOGS_BY_CATEGORY;

export default async function BlogsByCategory({ params }: ParamProps) {
  // properties
  const { slug } = params;
  const capitlizedSlug = slug.toUpperCase();

  const { data } = await getClient().query({
    query,
    variables: { slug },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <ContentWrapper>
      <div className="grid-blogs my-6 lg:my-0">
        <SubTitle
          title={`${capitlizedSlug} Blog Articles`}
          style="clip-text bg-hyper"
        />
        <PaginatedBlogs data={data} />
      </div>
      <aside className="grid-aside-content my-6 lg:my-0">
        <SubTitle title="Categories" style="clip-text bg-hyper" />
        <Categories />
      </aside>
    </ContentWrapper>
  );
}
