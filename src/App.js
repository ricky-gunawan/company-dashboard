import { useState } from "react";
import Company from "./components/Company";
import Contents from "./components/Contents";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} className={` ${sidebar ? "translate-x-[9rem]" : ""} transition absolute left-0 top-8 mt-2 ml-4 cursor-pointer rounded-md bg-green-700 p-2 text-white lg:hidden`}>
        {sidebar ? (
          <div className="w-4 py-1">
            <div className="translate-y-1/2 rotate-45 border-t-4"></div>
            <div className="-translate-y-1/2 -rotate-45 border-t-4"></div>
          </div>
        ) : (
          <div className="w-4 py-1">
            <div className="-translate-y-full border-t-4"></div>
            <div className="border-t-4"></div>
            <div className="translate-y-full border-t-4"></div>
          </div>
        )}
      </div>
      <Header />
      <Sidebar sidebar={sidebar} />
      <Company sidebar={sidebar} />
      <Contents />
    </>
  );
}

export default App;
