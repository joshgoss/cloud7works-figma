import React from "react";
import DonecLoremMagnaPage from "./pages/DonecLoremMagnaPage";

function App() {
  return (
    <div className="App w-full h-full">
      {/** User bar */}
      <div className="h-[30px] bg-[#D4D4D4] border-b border-[#E5E5E5]">
        <div className="container mx-auto md:w-[1320px]">
          <div className="flex justify-end items-center">
            <div>
              <span className="text-xs underline">Hi, Barbara </span>{" "}
              <span className="text-xs">&or;</span>
            </div>
          </div>
        </div>
      </div>

      {/** Logo and Nav */}
      <div className="border-b border-[#E5E5E5] h-[60px]">
        <div className="container h-full mx-auto md:w-[1320px]">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <div className="bg-[#D9D9D9] w-[150px] font-bold text-xs align-middle text-center">
              <span className="text-xs inline-block align-middle font-bold py-4">
                WEB PORTAL LOGO
              </span>
            </div>

            {/* Navigation */}
            <ul className="text-xs font-bold ">
              <li className="inline mr-5">Dashboard</li>
              <li className="inline-block mr-5 border-b-4 border-black">
                Lorem Ipsum
              </li>
              <li className="inline mr-5">Dolor</li>
              <li className="inline mr-5">Sit Amet &or;</li>
              <li className="inline mr-5">Ulmacorper &or;</li>
              <li className="inline mr-5">Morbi Rutrum &or;</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container h-full mx-auto md:w-[1320px] mb-3">
        <p className="text-[#6b6b6b] text-[10px] mt-[10px] mb-[4px]">
          Lorem Ipsum {">"} Donec Lorem
        </p>

        <DonecLoremMagnaPage />
      </div>

      {/** Footer **/}
      <div className="bg-[#CCCCCC] h-[30px] border-t border-[#F8F8F8]">
        <div className="container h-full mx-auto md:w-[1320px] ">
          <div className="flex h-full items-center justify-between">
            <p className="text-[10px]"> &copy; 2023 All Rights Reserved.</p>

            <div className="h-full">
              <a className="text-[10px] underline uppercase mr-5" href="">
                Contact
              </a>
              <a className="text-[10px] underline uppercase" href="">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
