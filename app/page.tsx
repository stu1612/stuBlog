// files
import { getClient } from "@/lib/apollo/client";
import { GET_FEATURED_BLOGS } from "@/lib/services";

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

  console.log(data);
  return <div>Hello</div>;
}
