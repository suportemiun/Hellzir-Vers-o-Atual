import React from 'react';
import { ServiceIcon1, ServiceIcon2, ServiceIcon3, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  preTitle: string;
  title: string;
  description: string;
  discount?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, preTitle, title, description, discount }) => (
  <div className="relative bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-orange-600 hover:scale-105 group">
    {discount && (
      <div className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">{discount}</div>
    )}
    <div className="w-24 h-24 rounded-full border-2 border-gray-700 group-hover:border-orange-600 flex items-center justify-center transition-colors duration-300">
      {icon}
    </div>
    <p className="mt-8 text-gray-400">{preTitle}</p>
    <h3 className="mt-1 text-3xl font-bold">{title}</h3>
    <p className="mt-4 text-gray-400 flex-grow">{description}</p>
    <button className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
      Contratar
    </button>
  </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <ServiceIcon1 className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />,
      preTitle: 'Nós jogamos para você',
      title: 'ELO JOB',
      description: 'Ideal para você que travou em alguma divisão, jogaremos em sua conta até atingir o ELO desejado.',
      discount: '25% OFF',
    },
    {
      icon: <ServiceIcon2 className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />,
      preTitle: 'Jogue DUO com Desafiantes',
      title: 'DUO BOOST',
      description: 'Você sobe de ELO enquanto joga DUO com Desafiantes e recebe dicas incríveis durante a partida.',
      discount: '25% OFF',
    },
    {
      icon: <ServiceIcon3 className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" />,
      preTitle: 'Garanta sua MD5',
      title: 'MD5 (MD10)',
      description: 'Nós garantimos 80% de vitória em sua série de classificação Elo Boost e 60% para Duo Boost.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
             <button disabled className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                 <ChevronLeftIcon className="w-6 h-6"/>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                  <ServiceCard key={index} {...service} />
              ))}
            </div>
             <button disabled className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                 <ChevronRightIcon className="w-6 h-6"/>
            </button>
        </div>
        <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-full"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;