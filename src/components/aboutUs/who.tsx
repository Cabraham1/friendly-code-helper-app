interface Props {
  firstpage: string;
  second: string;
}

export const Who = ({ second, firstpage }: Props) => {
  return (
    <section className="w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We’re For</h2>
          <p className="text-lg mb-6">Our platform is designed for:</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base">
            <li>Students & Teachers</li>
            <li>Environmentalists & Activists</li>
            <li>Policymakers & NGOs</li>
            <li>Curious citizens and climate-conscious individuals</li>
          </ul>
          <p>
            Whether you're here to learn, explore, or teach, there's something
            for everyone.
          </p>
        </div>

        <div className="relative w-full h-auto hidden md:flex justify-center items-center">
          <div className="absolute right-48 mt-[5] w-[350px] h-[270px] rounded-xl overflow-hidden shadow-lg z-10">
            <img
              src={second}
              alt="Fun learning background"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[180px] rounded-xl overflow-hidden shadow-md z-0">
            <img
              src={firstpage}
              alt="Stack of books and globe"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
