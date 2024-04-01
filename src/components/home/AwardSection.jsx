"use client";
import React from "react";
import Eyebrow from "../common/Eyebrow";
import { motion } from "framer-motion";
import { revealFromDown } from "@/constants/animation";

export default function AwardSection() {
  return (
    <div className="bg-[#F4F2E7] my-32">
      <div className="container-box py-20">
        {" "}
        <Eyebrow title="huge honor" />
        <div className="flex gap-20 lg:flex-row flex-col">
          <div className="flex-shrink-0 ">
            <motion.h1
              variants={revealFromDown}
              initial="hidden"
              whileInView="show"
              custom={0.3}
              viewport={{ once: true }}
              className="text-5xl font-bold"
            >
              My Awards
            </motion.h1>
          </div>
          <div className="flex flex-col">
            <div className="flex items-start gap-20 flex-col md:flex-row">
              <motion.p
                className=" text-gray-500 leading-relaxed"
                variants={revealFromDown}
                initial="hidden"
                whileInView="show"
                custom={0.5}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                blanditiis repellendus ut excepturi. Consectetur facilis rerum,
                aliquid ut placeat provident maiores. Accusamus provident
                perferendis possimus sed temporibus, enim accusantium eum.
              </motion.p>

              <motion.button
                variants={revealFromDown}
                initial="hidden"
                whileInView="show"
                custom={0.7}
                className="flex-shrink-0 flex gap-2"
              >
                <span>View all</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </motion.button>
            </div>

            <div className="flex mt-10 gap-6 flex-wrap md:flex-nowrap">
              <motion.div
                variants={revealFromDown}
                initial="hidden"
                whileInView="show"
                custom={0.9}
                className="w-full border h-56  flex items-center justify-center"
              >
                award 1
              </motion.div>
              <motion.div
                variants={revealFromDown}
                initial="hidden"
                whileInView="show"
                custom={1.1}
                className="w-full border h-56  flex items-center justify-center"
              >
                award 2
              </motion.div>
              <motion.div
                variants={revealFromDown}
                initial="hidden"
                whileInView="show"
                custom={1.3}
                className="w-full border h-56  flex items-center justify-center"
              >
                award 3
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
