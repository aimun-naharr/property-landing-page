import Container from "@/layouts/Container";
import Eyebrow from "@/components/common/Eyebrow";

const AboutSection = () => {
  return (
    <section className="py-40 gap-10 grid grid-cols-12  container-box ">
      <div className="col-span-6 ">
        <Eyebrow title="premium quality" />
        <h1 className="text-6xl font-bold " style={{ wordSpacing: "-12px" }}>
          Creative approach to architecture
        </h1>
        <p className="text-gray-600 mt-4 pl-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="col-span-6 flex flex-col">
        <div className="h-40"></div>
        <div className="flex gap-8 items-center text-balance text-gray-600">
          <p>
            <span className="text-6xl font-bold text-gray-800">Q</span>orem
            ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos
            libero, eum aliquam dolorem sequi magni deleniti quae officiis odio?{" "}
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            quibusdam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dignissimos libero, eum aliquam dolorem sequi magni deleniti quae
            officiis odio? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, dolore voluptates? Hic, minima tenetur aspernatur beatae
            et earum numquam magni!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
