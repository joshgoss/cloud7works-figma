import React from "react";
import DonecLoremMagnaPage from "./pages/DonecLoremMagnaPage";

function App() {
  return (
    <div className="App w-full">
      {/** User bar */}
      <div className="h-[48px] bg-[#ccc] border-b border-[#E5E5E5]">
        <div className="container h-full mx-auto xl:w-[1280px]">
          <div className="flex h-full justify-end items-center px-6">
            <div>
              <span className="underline cursor-pointer">Hi, Barbara </span>{" "}
              <span className="">&or;</span>
            </div>
          </div>
        </div>
      </div>

      {/** Logo and Nav */}
      <div className="border-b border-[#E5E5E5]">
        <div className="container h-full mx-auto xl:w-[1280px]">
          <div className="flow-root">
            {/* Logo */}
            <div className="float-left bg-[#D9D9D9] h-[73px] w-[241px] text-center mt-[10px] mb-[13px]">
              <span className="text-[18px] font-[600] inline-block align-middle leading-[73px]">
                WEB PORTAL LOGO
              </span>
            </div>

            {/* Navigation */}
            <ul className="float-right font-[600] mt-[30px]">
              <li className="inline mr-5 cursor-pointer">Dashboard</li>
              <li className="inline-block mr-5 border-b-[5px] border-black cursor-pointer">
                Lorem Ipsum
              </li>
              <li className="inline mr-5 cursor-pointer">Dolor</li>
              <li className="inline mr-5 cursor-pointer">Sit Amet &or;</li>
              <li className="inline mr-5 cursor-pointer">Ulmacorper &or;</li>
              <li className="inline mr-5 cursor-pointer">Morbi Rutrum &or;</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container h-full mx-auto xl:w-[1280px] mb-3">
        <p className="text-[#616161] text-[10px] mt-[10px] mb-[4px]">
          Lorem Ipsum {">"} Donec Lorem
        </p>

        <DonecLoremMagnaPage />
      </div>

      {/** Footer **/}
      <div className="bg-[#CCCCCC] h-[44px] border-t border-[#F8F8F8] mt-20">
        <div className="container h-full mx-auto md:w-[1281px] ">
          <div className="flex h-full items-center justify-between">
            <p className=""> &copy; 2023 All Rights Reserved.</p>

            <div className="h-full">
              <a className="underline uppercase mr-10 leading-[44px]" href="">
                Contact
              </a>
              <a className="underline uppercase leading-[44px]" href="">
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
