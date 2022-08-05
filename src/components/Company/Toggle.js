export default function Toggle() {
  return (
    <div className="flex justify-center gap-1">
      <label htmlFor="toggle" className="flex w-[38px] cursor-pointer rounded-full border border-green-700 bg-green-700 p-[2px]">
        <input className="peer hidden" type="checkbox" id="toggle" />
        <span className="h-4 w-4 self-center rounded-full bg-white peer-checked:translate-x-full" />
      </label>
    </div>
  );
}
