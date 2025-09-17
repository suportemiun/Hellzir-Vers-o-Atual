
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-32 min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://i.imgur.com/cAT33zj.jpeg" alt="Hero Character" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            CONQUISTE O ELO QUE VOCÊ MERECE
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            Ajudamos você a subir de ELO, garantir recompensas e deixar os jogadores tóxicos para trás.
          </p>
          <button className="mt-10 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-orange-600/20">
            Comece agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;