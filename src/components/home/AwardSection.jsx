import React from "react";
import Eyebrow from "../common/Eyebrow";

export default function AwardSection() {
  return (
    <div className="bg-[#F4F2E7] my-32">
      <div className="container-box py-20">
        {" "}
        <Eyebrow title="huge honor" />
        <div className="flex gap-20">
          <div className="flex-shrink-0 ">
            <h1 className="text-5xl font-bold">My Awards</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex items-start gap-20 ">
              <h1 className="text-xl text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                blanditiis repellendus ut excepturi. Consectetur facilis rerum,
                aliquid ut placeat provident maiores. Accusamus provident
                perferendis possimus sed temporibus, enim accusantium eum.
              </h1>

              <button className="flex-shrink-0">View all</button>
            </div>

            <div className="flex mt-10 gap-6">
              <div className="w-full border h-56  flex items-center justify-center">
                award 1
              </div>
              <div className="w-full border h-56  flex items-center justify-center">
                award 2
              </div>
              <div className="w-full border h-56  flex items-center justify-center">
                award 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
