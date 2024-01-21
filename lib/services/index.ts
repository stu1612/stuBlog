import { gql, DocumentNode } from "@apollo/client";

export const GET_FEATURED_BLOGS: DocumentNode = gql`
  query Posts {
    posts(last: 3) {
      createdAt
      excerpt
      id
      publishedAt
      slug
      title
      updatedAt
      image {
        url
      }
      categories {
        id
        slug
        name
      }
    }
  }
`;

export const GET_ALL_BLOGS: DocumentNode = gql`
  query Posts {
    posts {
      createdAt
      excerpt
      id
      publishedAt
      slug
      title
      updatedAt
      image {
        url
      }
      categories {
        id
        slug
        name
      }
    }
  }
`;

export const GET_BLOG_BY_SLUG: DocumentNode = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      excerpt
      createdAt
      image {
        url
      }
      content {
        raw
      }
      categories {
        id
        slug
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
      slug
    }
  }
`;

export const GET_BLOGS_BY_CATEGORY: DocumentNode = gql`
  query PostsByCategory($slug: String!) {
    posts(where: { categories_some: { slug: $slug } }) {
      createdAt
      excerpt
      id
      publishedAt
      slug
      title
      updatedAt
      image {
        url
      }
      categories {
        id
        slug
        name
      }
    }
  }
`;
