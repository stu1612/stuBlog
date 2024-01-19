import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "stuBlog | Frontend and Full Stack Web Development Blog",
  description:
    "Frontend and FullStack Web Development Blog for aspiring developers wanting to learn interesting wed development trends.",
  icons: {
    icon: "/images/logo.png",
  },
};

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
        <main className="wrapper mx-auto  px-4 xl:px-0 h-[200vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
