export default function User() {
  return (
    <div>
      <div className="flex items-center gap-2 ml-2 sm:ml-4">
        <img className="rounded-full h-8 w-8 border-2 border-red-500" src="https://source.unsplash.com/200x200/?face" alt="avatar" />
        <span className="hidden xs:block ">John Doe</span>
      </div>
    </div>
  );
}
