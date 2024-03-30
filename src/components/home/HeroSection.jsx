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
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 50 },
    show: (delay) => ({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      transition: {
        duration: 0.8,
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
          className="text-8xl "
          custom={0}
        >
          Modern{" "}
        </motion.h1>
        <motion.h1
          variants={heroTitleAnim}
          initial="hidden"
          animate="show"
          className="text-8xl "
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
        variants={imageAnim}
        initial="hidden"
        animate="show"
        custom={1.4}
        className="absolute top-[10%] 2xl:left-[13%] 3xl:w-[400px] 2xl:w-[350px]   overflow-hidden rounded"
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
        className="absolute bottom-[5%] right-[12%] w-[350px]     overflow-hidden rounded"
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
        className="absolute bottom-[15%] right-[6%] w-[150px]  overflow-hidden rounded z-[1]"
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
        className="absolute top-[10%] right-[5%] 3xl:h-[450px] 2xl:h-[250px]  overflow-hidden rounded"
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
        className="absolute top-[30%] left-[10%] w-[180px] overflow-hidden rounded"
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
        className="absolute bottom-0 left-[5%] 3xl:w-[500px] 2xl:w-[380px] overflow-hidden rounded  "
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
