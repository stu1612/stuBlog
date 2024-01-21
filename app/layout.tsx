import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  openGraph: {
    title: "stuBlog | Frontend and Full Stack Web Development Blog",
    description:
      "Frontend and FullStack Web Development Blog for aspiring developers wanting to learn interesting wed development trends.",
    url: "https://stu-blog-three.vercel.app/",
    siteName: "stuBlog",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://stu-blog-three.vercel.app/"),
  icons: {
    icon: "/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "stuBlog",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "Typescript",
    "TailwindCSS",
    "Apollo Client",
    "Shadcdn",
    "Hygraph CMS",
  ],
  authors: [
    { name: "Stuart Bolderson" },
    { url: "https://stu-blog-three.vercel.app/" },
  ],
  creator: "Stuart Bolderson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "se-SE": "/se-SE",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
// export const metadata: Metadata = {
//   metadataBase: new URL("https://stu-blog-three.vercel.app/"),
//   title: "stuBlog | Frontend and Full Stack Web Development Blog",
//   description:
//     "Frontend and FullStack Web Development Blog for aspiring developers wanting to learn interesting wed development trends.",
//   icons: {
//     icon: "/images/logo.png",
//   },
//   generator: "Next.js",
//   applicationName: "stuBlog",
//   referrer: "origin-when-cross-origin",
//   keywords: [
//     "Next.js",
//     "React",
//     "Typescript",
//     "TailwindCSS",
//     "Apollo Client",
//     "Shadcdn",
//     "Hygraph CMS",
//   ],
//   authors: [
//     { name: "Stuart Bolderson" },
//     { url: "https://stu-blog-three.vercel.app/" },
//   ],
//   creator: "Stuart Bolderson",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//       "se-SE": "/se-SE",
//     },
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar />
        <main className="wrapper mx-auto px-4 xl:px-0 h-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
