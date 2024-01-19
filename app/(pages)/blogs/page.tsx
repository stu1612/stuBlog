import { getClient } from "@/lib/apollo/client";
import { GET_ALL_BLOGS } from "@/lib/services";

import ContentWrapper from "@/components/layout/ContentWrapper";
import SubTitle from "@/components/shared/SubTitle";
import PaginatedPosts from "@/components/layout/PaginatedPosts";

const query = GET_ALL_BLOGS;

export default async function Blogs() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <ContentWrapper>
      <div className="grid-blogs">
        <div>
          <SubTitle title="All Blog Articles" style="clip-text bg-hyper" />
        </div>
        <PaginatedPosts data={data} />
      </div>
      <aside className="grid-aside-content ">
        <SubTitle title="Categories" style="clip-text bg-hyper" />
        {/* <Categories /> */}
      </aside>
    </ContentWrapper>
  );
}
