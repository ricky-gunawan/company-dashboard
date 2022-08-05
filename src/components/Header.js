import Breadcrumb from "./Header/Breadcrumb";
import User from "./Header/User";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-12 flex items-center">
      <Breadcrumb />
      <SearchIcon className="h-6 w-6 mx-2" />
      <BellIcon className="h-6 w-6 mx-2" />
      <User />
    </div>
  );
}
