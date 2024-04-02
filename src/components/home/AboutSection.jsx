"use client";
import Container from "@/layouts/Container";
import Eyebrow from "@/components/common/Eyebrow";
import { motion } from "framer-motion";
import { revealFromDown } from "@/constants/animation";

const AboutSection = () => {
  return (
    <section className="py-40 gap-10 grid 2xl:grid-cols-12 grid-cols-1   container-box ">
      <div className="2xl:col-span-6 ">
        <Eyebrow title="premium quality" />
        <motion.h1
          variants={revealFromDown}
          initial="hidden"
          whileInView="show"
          custom={0.2}
          className="section-title"
          style={{ wordSpacing: "-12px" }}
        >
          Creative approach to architecture
        </motion.h1>
        <motion.p
          variants={revealFromDown}
          initial="hidden"
          whileInView="show"
          custom={0.4}
          className="text-gray-600 mt-4 pl-1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </motion.p>
      </div>
      <div className="2xl:col-span-6 flex flex-col">
        <div className="2xl:h-40"></div>
        <div className="flex md:gap-8 flex-col md:flex-row items-center text-balance text-gray-500 leading-relaxed">
          <motion.p
            className=""
            variants={revealFromDown}
            initial="hidden"
            whileInView="show"
            custom={0.6}
          >
            <span className="md:text-6xl text-4xl font-bold text-gray-800 font-poppins">
              Q
            </span>
            Creative approach to architecture eum aliquam dolorem sequi magni
            deleniti quae officiis odio? <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            quibusdam!
          </motion.p>
          <motion.p
            variants={revealFromDown}
            initial="hidden"
            whileInView="show"
            custom={0.8}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dignissimos libero, eum aliquam dolorem sequi magni deleniti quae
            officiis odio? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
