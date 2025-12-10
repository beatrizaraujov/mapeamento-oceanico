import React, { useState, useEffect, useRef } from 'react';

// =======================================================
// 🔹 DADOS DAS ONGs
// =======================================================
const ONG_CARDS = [
  {
    icon: '⚖️',
    title: 'Oceana',
    description:
      'Focada em reformas políticas globais e advocacy baseado em evidências científicas. Utiliza dados para apoiar leis que protegem os oceanos, combatendo a sobrepesca e a poluição.',
  },
  {
    icon: '🏴‍☠️',
    title: 'Sea Shepherd',
    description:
      'Executa missões de ação direta e não violenta para proteger a vida marinha. Suas campanhas combatem a pesca predatória, caça ilegal e crimes ambientais.',
  },
  {
    icon: '🐢',
    title: 'Projeto TAMAR',
    description:
      'Referência nacional em conservação. Realiza pesquisa científica, monitoramento de desovas e educação ambiental para preservar as espécies de tartarugas marinhas no Brasil.',
  },
  {
    icon: '🦈',
    title: 'Programa Argo',
    description:
      'Especializado em monitoramento oceanográfico avançado, utilizando sensores e tecnologia para entender mudanças climáticas e proteger ecossistemas marinhos.',
  },
];

// =======================================================
// 🔹 HOOK: Elemento aparece ao entrar na área visível
// =======================================================
function useScrollVisibility(delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const sensitivity = window.innerWidth <= 768 ? 0.97 : 0.8;

    const handleScroll = () => {
      if (!elementRef.current || isVisible) return;

      const rect = elementRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * sensitivity;

      if (rect.top < triggerPoint) {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, delay]);

  return [elementRef, isVisible];
}

// =======================================================
// 🔹 CARD ANIMADO
// =======================================================
const AnimatedCard = ({ card, index }) => {
  const [ref, isVisible] = useScrollVisibility(index * 200);

  return (
    <div
      ref={ref}
      className={`
        group p-8 rounded-2xl relative cursor-pointer transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Overlay / Fundo */}
      <div
        className="
          absolute inset-0 rounded-2xl -z-10
          border border-blue-800/60
          bg-blue-900/20 backdrop-blur-md
          shadow-xl opacity-0 scale-[0.9]
          transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:scale-100
          group-hover:shadow-cyan-400/20
        "
      />

      {/* Ícone */}
      <div
        className="
          w-20 h-20 mx-auto rounded-full
          flex items-center justify-center text-4xl
          bg-blue-800/40 border border-blue-700
          transition-all duration-300 group-hover:bg-blue-600/40
        "
      >
        {card.icon}
      </div>

      {/* Título */}
      <h3 className="mt-6 text-xl font-semibold text-center text-white transition group-hover:text-cyan-300">
        {card.title}
      </h3>

      {/* Descrição (fix no mobile) */}
      <p
        className="
          mt-4 text-gray-300 text-sm leading-relaxed text-center
          transition-all duration-500 ease-out

          /* MOBILE: sempre aparece */
          opacity-100 translate-y-0 scale-100

          /* DESKTOP: aparece só no hover */
          sm:opacity-0 sm:translate-y-3 sm:scale-[0.97]
          sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-hover:scale-100
        "
      >
        {card.description}
      </p>
    </div>
  );
};

// =======================================================
// 🔹 COMPONENTE PRINCIPAL
// =======================================================
export default function OceanIntro() {
  return (
    <section
      id="ciencia-meio-ambiente"
      className="relative w-full min-h-screen bg-[#001a33] text-white overflow-hidden flex pt-48 pb-24"
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none blur-3xl opacity-60">
        <div className="absolute top-0 left-[-120px] w-[420px] h-[420px] bg-blue-800/30 rounded-full" />
        <div className="absolute bottom-10 left-[200px] w-72 h-72 bg-cyan-700/20 rounded-full" />
        <div className="absolute top-1/3 right-[-150px] w-[450px] h-[450px] bg-blue-900/20 rounded-full" />
      </div>

      <div className="relative z-10 w-full px-10 lg:px-24">
        {/* TÍTULO */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Ciência Ambiental
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            O mapeamento e a pesquisa das profundezas oceânicas são essenciais
            para a preservação. Dados batimétricos e descobertas científicas
            orientam ONGs na criação de áreas protegidas, no combate à pesca
            ilegal e no desenvolvimento de políticas públicas eficazes.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {ONG_CARDS.map((card, index) => (
            <AnimatedCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
