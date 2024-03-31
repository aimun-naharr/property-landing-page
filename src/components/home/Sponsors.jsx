"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/common/InfiniteMovingCards";
import { sponsorImages } from "@/constants/assets";
import Image from "next/image";

export default function Sponsors() {
  const { sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6 } =
    sponsorImages;
  const images = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6];

  return (
    <div className="container-box  my-40">
      <InfiniteMovingCards speed="slow">
        {images.map((img, i) => {
          return (
            <div key={i} className="opacity-[0.2] hover:opacity-[1] ">
              <Image
                className="mix-blend-difference"
                src={img}
                alt=""
                placeholder="blur"
              />
            </div>
          );
        })}
      </InfiniteMovingCards>
    </div>
  );
}
