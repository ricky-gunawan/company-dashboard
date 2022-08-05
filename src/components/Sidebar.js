import { AdjustmentsIcon, ArchiveIcon, CashIcon, ClipboardCheckIcon, CubeIcon, DeviceMobileIcon, HomeIcon, OfficeBuildingIcon, SearchCircleIcon, SortAscendingIcon, UsersIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="fixed left-0 right-0 h-full w-12 flex flex-col items-center gap-6 bg-[#f7f7f7] shadow-lg">
      <div className="mt-8 w-8 h-8 rounded-full bg-green-400 text-xs text-white font-semibold flex items-center justify-center">M</div>
      <div className="flex flex-col">
        <HomeIcon className="w-12 h-10 p-3" />
        <AdjustmentsIcon className="w-12 h-10 p-3" />
        <ClipboardCheckIcon className="w-12 h-10 p-3" />
        <ArchiveIcon className="w-12 h-10 p-3" />
        <OfficeBuildingIcon className="w-12 h-10 p-3 border-l-4 border-[#41aa58] bg-[#e2ebe4]" />
      </div>
      <div className="flex flex-col">
        <UsersIcon className="w-12 h-10 p-3" />
        <SortAscendingIcon className="w-12 h-10 p-3" />
        <CubeIcon className="w-12 h-10 p-3" />
        <CashIcon className="w-12 h-10 p-3" />
        <SearchCircleIcon className="w-12 h-10 p-3" />
      </div>
      <DeviceMobileIcon className="w-12 h-10 p-3" />
    </div>
  );
}
