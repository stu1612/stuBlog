import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    // <footer className="fixed bottom-0 h-36 mt-24 bg-slate-200 z-20">
    <footer className="mt-24 h-36 bg-slate-200 z-20">
      <nav className="wrapper mx-auto px-4 xl:px-0 h-full flex flex-col items-center justify-evenly md:flex-row md:justify-between ">
        <div>
          <small className="p-medium-12">&copy; Copyright 2024 | stuBlog</small>
        </div>
        <ul className="flex flex-row items-center">
          <p className="p-medium-12">stu.bolderson@aol.com</p>
          <li className="mx-3 flex">
            <SocialLinks />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
