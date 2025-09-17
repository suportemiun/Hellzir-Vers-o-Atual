import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Boosters from './components/Boosters';
import Reviews from './components/Reviews';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { ChatBubbleIcon } from './components/Icons';
import TopBanner from './components/TopBanner';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <Services />
        <Boosters />
        <Reviews />
        <Features />
        <CallToAction />
      </main>
      <Footer />
      <button className="fixed bottom-8 right-8 bg-[#5865F2] hover:bg-[#4752C4] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110">
        <ChatBubbleIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default App;