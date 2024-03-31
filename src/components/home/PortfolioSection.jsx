"use client";
import React from "react";
import Container from "@/layouts/Container";
import { FollowerPointerCard } from "@/components/common/FollowingPointer";
import { portfolioImages } from "@/constants/assets";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="grid grid-cols-4 grid-rows-2 container-box gap-6">
      <div className="col-span-2 row-span-2 relative">
        <FollowerPointerCard title={<div className="bg-red-500">house</div>}>
          <Image
            src={portfolioImages.portfolio1}
            alt="house"
            placeholder="blur"
            className="object-cover h-full"
          />
        </FollowerPointerCard>
      </div>
      <div className="col-span-1 row-span-2   relative">
        {" "}
        <Image
          src={portfolioImages.portfolio2}
          alt="house"
          placeholder="blur"
          className="object-cover h-full"
        />
      </div>
      <div className="col-span-1 row-span-1   flex flex-col">
        {" "}
        <Image
          src={portfolioImages.portfolio3}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-1 row-span-1   flex flex-col">
        {" "}
        <Image
          src={portfolioImages.portfolio4}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 row-span-1   ">
        {" "}
        <Image
          src={portfolioImages.portfolio5}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 row-span-2 ">
        <Image
          src={portfolioImages.portfolio6}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 row-span-1   ">
        {" "}
        <Image
          src={portfolioImages.portfolio7}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
