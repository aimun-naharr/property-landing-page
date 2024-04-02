"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroSectionImages } from "../../constants/assets";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const heroTitleAnim = {
    hidden: { y: 20, opacity: 0 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1.2, delay: delay },
    }),
  };

  const imageAnim = {
    hidden: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      y: 50,
    },
    show: (delay) => ({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: [0, 0.55, 0.45, 1],
      },
    }),
  };

  return (
    <section className="relative h-[calc(100vh-60px)]">
      <div className="flex flex-col items-center justify-center  h-full  font-semibold  relative z-10 tracking-tight text-slate-800">
        <motion.h1
          variants={heroTitleAnim}
          initial="hidden"
          animate="show"
          className="text-5xl  md:text-8xl text-center 3xl:text-[7vw]"
          custom={0.3}
        >
          Modern{" "}
        </motion.h1>
        <motion.h1 className="text-5xl md:text-8xl text-center 3xl:text-[7vw]">
          <motion.span
            variants={heroTitleAnim}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="inline-block"
          >
            Style &nbsp;
          </motion.span>
          <motion.span
            variants={heroTitleAnim}
            initial="hidden"
            animate="show"
            custom={0.7}
            className="inline-block"
          >
            & &nbsp;
          </motion.span>
          <motion.span
            variants={heroTitleAnim}
            initial="hidden"
            animate="show"
            custom={0.9}
            className="inline-block"
          >
            Design
          </motion.span>
        </motion.h1>
        <motion.p
          variants={heroTitleAnim}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-2xl mt-8"
        >
          LA . NYC. PARIS
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce-slow hidden md:block"
        variants={heroTitleAnim}
        initial="hidden"
        animate="show"
        custom={2.4}
      >
        <ArrowDown />
      </motion.div>
      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={1.4}
        className="absolute top-[10%] 2xl:left-[13%] 3xl:w-[400px] md:w-[350px] w-[200px]  overflow-hidden "
      >
        <Image
          src={heroSectionImages.image3}
          placeholder="blur"
          alt="property design"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={1.6}
        className="absolute bottom-[5%] right-[2%] md:right-[12%] md:w-[350px] w-[200px]  overflow-hidden  hidden md:block"
      >
        <Image
          src={heroSectionImages.image5}
          placeholder="blur"
          className="object-cover"
          alt="property design"
        />
      </motion.div>
      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={1.8}
        className="absolute bottom-[15%] right-[6%] md:w-[150px] w-[100px] overflow-hidden  z-[1] "
      >
        <Image
          src={heroSectionImages.image1}
          placeholder="blur"
          className="object-cover"
          alt="property design"
        />
      </motion.div>

      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={2}
        className="absolute top-[10%] right-[5%] w-[100px] md:w-[420px] 2xl:w-auto 3xl:h-[330px] 2xl:h-[300px] md:h-[250px] overflow-hidden "
      >
        <Image
          src={heroSectionImages.image2}
          placeholder="blur"
          className="object-cover"
          alt="property design"
        />
      </motion.div>
      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={2.2}
        className="absolute md:top-[30%] top-[20%] 2xl:left-[10%] left-[2%] w-[100px] overflow-hidden "
      >
        <Image
          src={heroSectionImages.image6}
          placeholder="blur"
          className="object-cover"
          alt="property design"
        />
      </motion.div>
      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={2.4}
        className="absolute bottom-0 left-[1%] w-[150px]  xl:left-[5%] 3xl:w-[500px] 2xl:w-[500px] md:w-[430px] overflow-hidden   "
      >
        <Image
          src={heroSectionImages.image4}
          placeholder="blur"
          className="object-cover"
          alt="property design"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
