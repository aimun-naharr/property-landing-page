"use client";
import React from "react";
import Eyebrow from "../common/Eyebrow";
import { portfolioImages } from "@/constants/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { revealFromDown } from "@/constants/animation";

const ArticleCard = ({ img, title, animationDelay }) => {
  return (
    <motion.div
      variants={revealFromDown}
      initial="hidden"
      whileInView="show"
      custom={animationDelay}
    >
      <div className="w-full h-auto">
        <Image src={img} alt="tilte" placeholder="blur" />
      </div>
      <div className="flex gap-2  mt-3 items-start">
        <div className="w-20 h-[2px] bg-slate-700 mt-1"></div>
        <div>
          <h1 className="flex gap-3 items-start">
            <span className="uppercase font-bold tracking-widest text-xs text-gray-600">
              Interior .
            </span>

            <span className="text-gray-400 text-xs">Apr 21, 2022</span>
          </h1>
          <h3 className="text-xl font-bold text-gray-800 font-poppins mt-3">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function ArticleSection() {
  return (
    <section className="container-box my-32">
      <div className="flex flex-col items-center justify-center mb-10">
        <Eyebrow title="Current News" />
        <h1 className="section-title">Latest Articles</h1>
      </div>
      <div className="flex gap-8 flex-wrap md:flex-nowrap">
        <ArticleCard
          img={portfolioImages.portfolio1}
          title="What material are used in high tech architecture?"
          animationDelay={0.2}
        />
        <ArticleCard
          img={portfolioImages.portfolio2}
          title="What material are used in high tech architecture?"
          animationDelay={0.4}
        />
        <ArticleCard
          img={portfolioImages.portfolio3}
          title="What material are used in high tech architecture?"
          animationDelay={0.6}
        />
      </div>
    </section>
  );
}
