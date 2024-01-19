export type Blog = {
  createdAt: string;
  excerpt: string;
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  image: {
    url: string;
  };
  categories: Array<{
    id: string;
    slug: string;
    name: string;
  }>;
};
