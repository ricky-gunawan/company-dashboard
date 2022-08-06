import { ShareIcon } from "@heroicons/react/outline";

export default function Relasi() {
  return (
    <div className="flex flex-col gap-5 p-5 bg-[#f7f7f7] rounded-md shadow-lg">
      <div className="flex items-center justify-between w-full mb-2">
        <span className="font-semibold text-lg">Relasi</span>
        <span className="text-[#41aa58]">Lihat semua</span>
      </div>
      <div className="flex items-center gap-5">
        <ShareIcon className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">20</span>
          <span className="text-xs">Memiliki</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ShareIcon className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">108</span>
          <span className="text-xs">Menggunakan</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ShareIcon className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">67</span>
          <span className="text-xs">Meminjam</span>
        </div>
      </div>
    </div>
  );
}
