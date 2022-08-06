import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";

export default function AkunBank() {
  return (
    <div className="flex flex-col gap-6 p-5 bg-[#f7f7f7] rounded-md shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Akun Bank</h3>
        <div className="flex gap-1 px-3 py-1 items-center justify-center rounded-lg text-[#f7f7f7] bg-green-700">
          <PlusIcon className="w-4 h-4" />
          <span>Tambah Akun Bank</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="basis-5/12 h-20 rounded-xl text-[#f7f7f7] italic font-bold text-xl bg-gradient-to-r from-yellow-400 to-green-700 flex items-end justify-end p-2">Visa</div>
        <div className="basis-3/6 flex flex-col justify-between">
          <span className="text-semibold">Bank KB Bukopin</span>
          <div className="text-xs">
            <p>***0876 - Yusron Taufiq</p>
            <p className="my-1">IDR</p>
          </div>
        </div>
        <div className="my-1 basis-1/12 flex gap-2">
          <PencilIcon className="text-green-700 w-4 h-4" />
          <TrashIcon className="text-red-700 w-4 h-4" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="basis-5/12 h-20 rounded-xl text-[#f7f7f7] italic font-bold text-xl bg-gradient-to-r from-blue-700 to-[#96bacf] flex items-end justify-end p-2">Visa</div>
        <div className="basis-3/6 flex flex-col justify-between">
          <span className="text-semibold">Citibank, NA</span>
          <div className="text-xs">
            <p>***5525 - Si Tampan</p>
            <p className="my-1">USD</p>
          </div>
        </div>
        <div className="my-1 basis-1/12 flex gap-2">
          <PencilIcon className="text-green-700 w-4 h-4" />
          <TrashIcon className="text-red-700 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
