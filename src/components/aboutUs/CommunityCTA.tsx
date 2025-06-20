interface Props {
  communityImage: string;
}

export const CommunityCTA = ({ communityImage }: Props) => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 relative">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Join a Growing Climate Action Community
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-md">
            Connect with like minded individuals, join discussions, share local
            solutions, and participate in real-world challenges that make an
            impact.
          </p>
          <button className="mt-6 border border-sky-500 text-sky-500 px-6 py-2 rounded-md hover:bg-sky-50 transition text-sm font-medium">
            Join the movement
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src={communityImage}
            alt="Community group"
            className="rounded-[2rem] w-full max-w-md h-auto shadow-md"
          />

          {/* Slanted Arrow */}
          <div className="hidden md:block absolute left-[-120px] top-1/2 -translate-y-1/2">
            <svg
              width="180"
              height="120"
              viewBox="0 0 180 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0 L160 100" stroke="#38BDF8" strokeWidth="2" />
              <path
                d="M155 100 L160 100 L160 95"
                stroke="#38BDF8"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
