const AboutSection = () => {
  return (
    <>
      <section className="py-32 max-w-7xl mx-auto  gap-10 grid grid-cols-12 grid-rows-2">
        <div className="col-span-6 row-span-0">
          <p className="font-bold uppercase tracking-widest text-sm text-gray-600 pl-1">
            Premium Quality
          </p>
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
          <div className="flex gap-8 items-center text-balance">
            <p>
              <span className="text-6xl font-bold">Q</span>orem ipsum dolor sit
              amet consectetur adipisicing elit. Amet dignissimos libero, eum
              aliquam dolorem sequi magni deleniti quae officiis odio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dignissimos libero, eum aliquam dolorem sequi magni deleniti quae
              officiis odio?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
