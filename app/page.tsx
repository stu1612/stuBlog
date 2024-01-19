// files
import { getClient } from "@/lib/apollo/client";
import { GET_FEATURED_BLOGS } from "@/lib/services";

// ui
import Hero from "@/components/shared/Hero";
import ContentWrapper from "@/components/layout/ContentWrapper";
import SubTitle from "@/components/shared/SubTitle";
import FeaturedBlogs from "@/components/layout/FeaturedBlogs";

const query = GET_FEATURED_BLOGS;

export default async function Home() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <>
      <Hero />
      <ContentWrapper>
        <div className="grid-blogs">
          <SubTitle title="Recent Blog Articles" />
          <FeaturedBlogs data={data} />
        </div>
      </ContentWrapper>
    </>
  );
}
