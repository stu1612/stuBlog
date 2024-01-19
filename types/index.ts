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

export type Project = {
  html_url: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type TitleProps = {
  title: string;
  style: string;
};
