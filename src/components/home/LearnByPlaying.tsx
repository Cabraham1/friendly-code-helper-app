interface Props {
  firstpage: string;
  second: string;
}

export const LearnByPlaying = ({ second, firstpage }: Props) => {
  return (
    <section className="w-full bg-gradient-to-b from-sky-600 to-sky-200 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn by playing
          </h2>
          <p className="text-lg mb-6">
            Explore quizzes, and challenges designed to teach you about climate
            change while having fun.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-base">
            <li>Earn badges</li>
            <li>Level up as you learn</li>
            <li>Track your score and streaks</li>
          </ul>
          <button className="bg-white text-sky-700 font-semibold px-6 py-2 rounded-md hover:bg-sky-100 transition">
            Start Playing
          </button>
        </div>

        <div className="relative w-full h-auto hidden md:flex justify-center items-center">
          <div className="absolute right-28 w-[350px] h-[250px] rounded-xl overflow-hidden shadow-lg z-10">
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
