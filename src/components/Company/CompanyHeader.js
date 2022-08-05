import { PencilIcon } from "@heroicons/react/outline";

export default function CompanyHeader() {
  return (
    <div className="relative">
      <img src="https://source.unsplash.com/320x96/?building" className="w-full h-24" alt="" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white text-blue-700 text-xl font-bold border-2 border-slate-300 flex items-center justify-center">LOGO</div>
      <div className="mt-20 mb-8 flex flex-col items-center">
        <p className="text-lg font-semibold">Mitramas Infosys Global</p>
        <span className="text-sm">Layanan IT</span>
        <div className="mt-4 text-sm flex items-center gap-2">
          <PencilIcon className="w-4 h-4" />
          <span>Sunting profile</span>
        </div>
      </div>
    </div>
  );
}
