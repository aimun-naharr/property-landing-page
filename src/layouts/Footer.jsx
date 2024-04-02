import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 py-40 text-white">
      <div className="container-box grid md:grid-cols-4 gap-8 md:gap-0 grid-cols-1">
        <div className="md:col-span-2">
          <h1 className="section-title" style={{ wordSpacing: "-10px" }}>
            Creating contemporary <br /> home designs
          </h1>
        </div>
        <div className="md:col-span-1 flex flex-col gap-2 text-xl">
          <h4 className="font-bold">Address</h4>
          <p className="opacity-[0.5] text-md">
            The USA <br /> — 785 15h Street, Office 478 <br /> Boston, MD 02130
          </p>
        </div>
        <div className="md:col-span-1 text-xl flex flex-col gap-2">
          <h4 className="font-bold">Say hello</h4>
          <p className="opacity-[0.5] text-md">hello@gmail.com</p>
          <p className="opacity-[0.5] text-md">+1800 555 25 69</p>
        </div>
      </div>
    </div>
  );
}
