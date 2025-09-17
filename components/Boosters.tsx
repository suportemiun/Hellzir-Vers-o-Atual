import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface BoosterProfileProps {
  avatar: string;
  name: string;
  role: string;
  roleIconUrl: string;
}

const BoosterProfile: React.FC<BoosterProfileProps> = ({ avatar, name, role, roleIconUrl }) => (
  <div className="flex-shrink-0 w-52 snap-start">
    <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:border-orange-600">
      <div className="relative">
        <img src={avatar} alt={name} className="w-24 h-24 rounded-full border-2 border-gray-700 object-cover" />
      </div>
      <h3 className="mt-4 text-xl font-bold uppercase">{name}</h3>
      <div className="mt-2 flex items-center space-x-2">
          <img src={roleIconUrl} alt={`${role} icon`} className="w-5 h-5" />
          <span className="text-gray-400">{role}</span>
      </div>
    </div>
  </div>
);

const Boosters: React.FC = () => {
  const boostersData = [
    { avatar: 'https://media.discordapp.net/attachments/1183201416805167175/1218671457896435772/IMG_20240316_191000.png', name: 'THEUZIKA', role: 'Atirador', roleIconUrl: 'https://i.imgur.com/b8EeCoF.png' },
    { avatar: 'https://media.discordapp.net/attachments/1183201416805167175/1247346187513954304/IMG-20240603-WA0001.jpg', name: 'NEYTAN', role: 'Meio', roleIconUrl: 'https://i.imgur.com/tO4qAq0.png' },
    { avatar: 'https://cdn.discordapp.com/attachments/1183201416805167175/1183204223126372432/vento.png', name: 'VAYNE', role: 'Atirador', roleIconUrl: 'https://i.imgur.com/b8EeCoF.png' },
    { avatar: 'https://cdn.discordapp.com/attachments/1183201416805167175/1183204220556550254/kuro.png', name: 'KILLA', role: 'Selva', roleIconUrl: 'https://i.imgur.com/vbuSeOm.png' },
    { avatar: 'https://cdn.discordapp.com/attachments/1183201416805167175/1183204222692933652/piplup.png', name: 'AKUMA', role: 'Atirador', roleIconUrl: 'https://i.imgur.com/b8EeCoF.png' },
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
          const scrollAmount = scrollContainerRef.current.clientWidth;
          scrollContainerRef.current.scrollBy({
              left: direction === 'left' ? -scrollAmount : scrollAmount,
              behavior: 'smooth',
          });
      }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="text-left">
                <div className="flex items-center space-x-3 mb-4">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </span>
                    <p className="text-cyan-400 font-semibold">83 BOOSTERS DISPONÍVEIS</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                  NÓS ESTAMOS<br/>PRONTOS PARA<br/>TE AJUDAR
                </h2>
            </div>
             <p className="text-gray-400 text-left">
              Recrutados do Mestre ao Desafiante e treinados em GRAVIDADE ZERO nossos astronautas têm win rates incríveis em qualquer ELO que você precisar.
            </p>
        </div>
        <div className="relative">
            <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-white transition-colors">
                 <ChevronLeftIcon className="w-6 h-6"/>
            </button>
            <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth" style={{scrollbarWidth: 'none'}}>
              {boostersData.map((booster, index) => (
                <BoosterProfile key={index} {...booster} />
              ))}
            </div>
             <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-white transition-colors">
                 <ChevronRightIcon className="w-6 h-6"/>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Boosters;