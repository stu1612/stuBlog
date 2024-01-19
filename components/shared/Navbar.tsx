// ui
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import ProfileAvatar from "./ProfileAvatar";

export default function Navbar() {
  return (
    <header>
      <div className="wrapper h-20 mx-auto px-4 xl:px-0 flex items-center justify-between">
        <ProfileAvatar />
        <nav className="items-center">
          <ul className="hidden md:flex flex-1 justify-center">
            <NavItems />
          </ul>
        </nav>
        <div>
          <MobileNav />
          <Button className="hidden md:flex">Github</Button>
        </div>
      </div>
      <Separator className="wrapper mx-auto border border-gray-100" />
    </header>
  );
}
