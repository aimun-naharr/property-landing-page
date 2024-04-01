"use client";
import React from "react";
import Container from "@/layouts/Container";
import { FollowerPointerCard } from "@/components/common/FollowingPointer";
import { portfolioImages } from "@/constants/assets";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="grid md:grid-cols-4 md:grid-rows-2 sm:grid-cols-2 grid-cols-1 container-box gap-6">
      <div className="md:col-span-2 row-span-2 relative">
        <FollowerPointerCard title={<div className="bg-red-500">house</div>}>
          <Image
            src={portfolioImages.portfolio1}
            alt="house"
            placeholder="blur"
            className="object-cover h-full"
          />
        </FollowerPointerCard>
      </div>
      <div className="md:col-span-1 row-span-2   relative">
        {" "}
        <Image
          src={portfolioImages.portfolio2}
          alt="house"
          placeholder="blur"
          className="object-cover h-full"
        />
      </div>
      <div className="md:col-span-1 row-span-1   flex flex-col">
        {" "}
        <Image
          src={portfolioImages.portfolio3}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:col-span-1 row-span-1   flex flex-col">
        {" "}
        <Image
          src={portfolioImages.portfolio4}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:col-span-2 row-span-1   ">
        {" "}
        <Image
          src={portfolioImages.portfolio5}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:col-span-2 row-span-2 ">
        <Image
          src={portfolioImages.portfolio6}
          alt="house"
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:col-span-2 row-span-1   ">
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
