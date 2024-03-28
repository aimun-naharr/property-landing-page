import Image from "next/image";
import { heroSectionImages } from "../constants/assets";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-conic">
      {/* navbar */}

      {/* hero section */}
      <section className="relative h-screen">
        <div className="flex flex-col items-center justify-center  h-full text-8xl font-semibold uppercase">
          <h1>Modern Style</h1>
          <h1>& Design</h1>
        </div>
        <div className="absolute top-[10%] left-[18%] w-[400px]   overflow-hidden rounded">
          <Image
            src={heroSectionImages.image3}
            placeholder="blur"
            alt="property design"
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-[5%] right-[12%] w-[350px]   overflow-hidden rounded">
          <Image
            src={heroSectionImages.image5}
            placeholder="blur"
            className="object-cover"
            alt="property design"
          />
        </div>
        <div className="absolute bottom-[15%] right-[28%] w-[150px]   overflow-hidden rounded">
          <Image
            src={heroSectionImages.image1}
            placeholder="blur"
            className="object-cover"
            alt="property design"
          />
        </div>

        <div className="absolute top-[10%] right-[5%] h-[350px]   overflow-hidden rounded">
          <Image
            src={heroSectionImages.image2}
            placeholder="blur"
            className="object-cover"
            alt="property design"
          />
        </div>
        <div className="absolute top-[30%] left-[10%] w-[180px] overflow-hidden rounded">
          <Image
            src={heroSectionImages.image6}
            placeholder="blur"
            className="object-cover"
            alt="property design"
          />
        </div>
        <div className="absolute bottom-4 left-[5%] w-[500px] overflow-hidden rounded">
          <Image
            src={heroSectionImages.image4}
            placeholder="blur"
            className="object-cover"
            alt="property design"
          />
        </div>
      </section>

      {/* about */}
      {/* service */}
      {/* portfolio gallery */}
      {/* contact */}
      {/* minimum footer */}
    </main>
  );
}
