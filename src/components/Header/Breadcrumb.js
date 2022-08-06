import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Breadcrumb() {
  return (
    <div className="grow flex items-center gap-2 lg:ml-12">
      <button className="hidden xs:block hover:underline">Perusahaan</button>
      <ChevronRightIcon className="hidden xs:block w-4 h-4" />
      <span className="font-semibold text-sm sm:text-base">Mitramas Infosys Global</span>
    </div>
  );
}
