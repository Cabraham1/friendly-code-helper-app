interface Props {
  firstpage: string;
  second: string;
}

export const SolveProblem = ({ second, firstpage }: Props) => {
  return (
    <section className="w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-20">
        {/* Image Section */}
        <div className="relative w-full h-auto hidden md:flex justify-center items-center">
          <div className="absolute right-28 w-[350px] h-[250px] mt-24 rounded-xl overflow-hidden shadow-lg z-10">
            <img
              src={firstpage}
              alt="Fun learning background"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[180px] rounded-xl overflow-hidden shadow-md z-0">
            <img
              src={second}
              alt="Stack of books and globe"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Problem We’re Solving
          </h2>
          <p className="text-lg mb-6">
            Africa faces growing threats from climate change: rising
            temperatures, unpredictable weather patterns, floods, and
            deforestation. Yet, access to real-time environmental data and
            engaging, localized climate education is limited. The digital
            generation lacks the tools to learn, act, and stay informed.
          </p>
        </div>
      </div>
    </section>
  );
};
