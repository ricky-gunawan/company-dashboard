import Aktivitas from "./Contents/Aktivitas";
import AkunBank from "./Contents/AkunBank";
import Lokasi from "./Contents/Lokasi";
import Relasi from "./Contents/Relasi";

export default function Contents() {
  return (
    <div className="flex flex-col ml-[27rem] mt-20 mb-14 mr-8 gap-8">
      <Lokasi />
      <div className="flex gap-10">
        <div className="basis-1/2 flex flex-col gap-8">
          <AkunBank />
          <Relasi />
        </div>
        <Aktivitas />
      </div>
    </div>
  );
}
