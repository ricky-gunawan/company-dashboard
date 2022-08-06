export default function Aktivitas() {
  return (
    <div className="basis-1/2 p-5 bg-[#f7f7f7] rounded-md shadow-lg">
      <h2 className="mb-4 text-lg font-semibold">Aktivitas</h2>
      <div className="mt-3 flex flex-col gap-1">
        <span>Yurson baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</span>
        <span className="text-xs">Hari ini, 06.00</span>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span>Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</span>
        <span className="text-xs">Kemarin, 17.32</span>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <span>Yurson melakukan perubahan profil pada induk Kantor Cabang Bekasi</span>
        <span className="text-xs">Kemarin, 17.32</span>
      </div>
    </div>
  );
}
