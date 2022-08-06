import Breadcrumb from "./Header/Breadcrumb";
import User from "./Header/User";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${scrollPosition > 80 ? "bg-[#f7f7f7]" : ""} fixed z-10 top-0 left-0 w-full h-12 flex items-center transition`}>
      <Breadcrumb />
      <SearchIcon className="h-6 w-6 mx-2" />
      <BellIcon className="h-6 w-6 mx-2" />
      <User />
    </div>
  );
}
