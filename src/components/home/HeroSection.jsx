"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroSectionImages } from "../../constants/assets";

const HeroSection = () => {
  const heroTitleAnim = {
    hidden: { y: 20, opacity: 0 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1, delay: delay },
    }),
  };

  const imageAnim = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      y: 50,
      rotate: 1,
    },
    show: (delay) => ({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease: [0.37, 0, 0.63, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen">
      <div className="flex flex-col items-center justify-center  h-full  font-semibold  relative z-10 tracking-tight text-slate-800">
        <motion.h1
          variants={heroTitleAnim}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl text-center "
          custom={0}
        >
          Modern{" "}
        </motion.h1>
        <motion.h1
          variants={heroTitleAnim}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl text-center"
          custom={0.5}
        >
          Style & Design
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
        className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce-slow"
        variants={heroTitleAnim}
        initial="hidden"
        animate="show"
        custom={2.4}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </motion.div>
      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={1.4}
        className="absolute top-[10%] 2xl:left-[13%] 3xl:w-[400px] md:w-[350px] w-[200px]  overflow-hidden rounded"
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
        className="absolute bottom-[5%] right-[2%] md:right-[12%] md:w-[350px] w-[200px]  overflow-hidden rounded"
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
        className="absolute bottom-[15%] right-[6%] md:w-[150px] w-[100px] overflow-hidden rounded z-[1]"
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
        className="absolute top-[10%] right-[5%] w-[100px] md:w-[420px] 2xl:w-auto 3xl:h-[450px] 2xl:h-[300px] md:h-[250px] overflow-hidden rounded"
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
        className="absolute md:top-[30%] top-[20%] 2xl:left-[10%] left-[2%] w-[100px] overflow-hidden rounded"
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
        className="absolute bottom-0 left-[1%] w-[150px]  xl:left-[5%] 3xl:w-[500px] 2xl:w-[500px] md:w-[430px] overflow-hidden rounded  "
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
