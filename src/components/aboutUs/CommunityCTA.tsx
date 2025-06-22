interface Props {
  communityImage: string;
}

export const CommunityCTA = ({ communityImage }: Props) => {
  return (
    <section className="w-full px-6 md:px-20 bg-white relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 relative">
        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src={communityImage}
            alt="Community group"
            className=" w-full max-w-md h-auto"
          />
        </div>

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            How It Works
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-md">
            Our platform merges real-time API data, user interactivity, and
            modern web technologies to provide:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base">
            <li>A climate data dashboard with up-to-date visuals</li>
            <li>A learning portal with trackable user progress</li>
            <li>
              A moderated community for resource sharing and collaboration
            </li>
          </ul>
          <button className="mt-6 border border-sky-500 text-sky-500 px-6 py-2 rounded-md hover:bg-sky-50 transition text-sm font-medium">
            Join the movement
          </button>
        </div>
      </div>
    </section>
  );
};
