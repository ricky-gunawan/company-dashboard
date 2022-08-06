import { HomeIcon, OfficeBuildingIcon, TagIcon } from "@heroicons/react/outline";

export default function Lokasi() {
  return (
    <div className="flex flex-col gap-2 items-center bg-[#f7f7f7] p-5 rounded-md shadow-lg">
      <div className="flex items-center justify-between w-full mb-2">
        <span className="font-semibold text-lg">Lokasi</span>
        <span className="text-[#41aa58]">Lihat semua</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full">
        <div className="flex items-center justify-between basis-1/3 bg-green-700 py-3 px-4 rounded-md text-[#f7f7f7]">
          <OfficeBuildingIcon className="w-10 h-10" />
          <div className="flex flex-col items-end">
            <span className="text-2xl">20</span>
            <span className="text-xs">Induk</span>
          </div>
        </div>
        <div className="flex items-center justify-between basis-1/3 bg-green-700 py-3 px-4 rounded-md text-[#f7f7f7]">
          <TagIcon className="w-10 h-10" />
          <div className="flex flex-col items-end">
            <span className="text-2xl">3</span>
            <span className="text-xs">Sub Lokal Level 1</span>
          </div>
        </div>
        <div className="flex items-center justify-between basis-1/3 bg-green-700 py-3 px-4 rounded-md text-[#f7f7f7]">
          <HomeIcon className="w-10 h-10" />
          <div className="flex flex-col items-end">
            <span className="text-2xl">1</span>
            <span className="text-xs">Sub Lokal Level 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
