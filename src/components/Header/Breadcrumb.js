import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Breadcrumb() {
  return (
    <div className="grow flex items-center gap-2 ml-28">
      <button className="hover:underline">Perusahaan</button>
      <ChevronRightIcon className="w-4 h-4" />
      <span>Mitramas Infosys Global</span>
    </div>
  );
}
