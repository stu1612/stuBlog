// files
import { getClient } from "@/lib/apollo/client";
import { GET_FEATURED_BLOGS } from "@/lib/services";

// ui
import Hero from "@/components/shared/Hero";
import ContentWrapper from "@/components/layout/ContentWrapper";
import SubTitle from "@/components/shared/SubTitle";
import FeaturedBlogs from "@/components/layout/FeaturedBlogs";
import Welcome from "@/components/shared/Welcome";

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
        <section className="grid-blogs">
          <SubTitle title="Recent Blog Articles" style="clip-text bg-hyper" />
          <FeaturedBlogs data={data} />
        </section>
        <aside className="grid-aside-content ">
          <SubTitle title="Welcome 👋" style="clip-text bg-sky" />
          <div className="mb-5 md:mb-0">
            <Welcome />
          </div>
        </aside>
      </ContentWrapper>
    </>
  );
}
