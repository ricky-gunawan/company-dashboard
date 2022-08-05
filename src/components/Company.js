import CompanyHeader from "./Company/CompanyHeader";
import Toggle from "./Company/Toggle";

export default function Company() {
  return (
    <div className="absolute bg-[#f7f7f7] left-20 top-20 w-72 rounded-md overflow-hidden shadow-lg">
      <CompanyHeader />
      <div className="m-5 flex flex-col gap-2">
        <div>
          <span className="text-sm">Status Perusahaan</span>
          <div className="mt-1 font-semibold flex items-center justify-between">
            <span className="text-green-700">Aktif</span>
            <Toggle />
          </div>
        </div>
        <div>
          <span className="text-sm">Singkatan</span>
          <div className="mt-1 font-semibold">MIG</div>
        </div>
        <div>
          <span className="text-sm">Alamat Perusahaan</span>
          <div className="mt-1 font-semibold">JL. Tebet Raya No.42, Jakarta Selatan</div>
        </div>
        <div>
          <span className="text-sm">Penanggung Jawab (PIC)</span>
          <div className="mt-1 font-semibold">John Doe</div>
        </div>
        <div>
          <span className="text-sm">Tanggal PKP</span>
          <div className="mt-1 font-semibold">03 Maret 2021</div>
        </div>
        <div>
          <span className="text-sm">Email</span>
          <div className="mt-1 font-semibold text-[#41aa58] underline">mig@mitrasolusi.group</div>
        </div>
        <div>
          <span className="text-sm">No. Telp</span>
          <div className="mt-1 font-semibold text-[#41aa58]">021-5678-1234</div>
        </div>
        <div>
          <span className="text-sm">Situs Web</span>
          <div className="mt-1 font-semibold text-[#41aa58] underline">mitramas.com</div>
        </div>
      </div>
    </div>
  );
}
