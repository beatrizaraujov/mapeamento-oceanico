import React, { useState, useEffect, useCallback, useRef } from "react";

const useIntersectionObserver = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isVisible];
};

const MAPPING_STEPS = [
    {
        id: 0,
        title: "Aquisição de Dados",
        description: "O sonar emite ondas sonoras que atingem o fundo do mar e retornam, registrando profundidade e formato do terreno."
    },
    {
        id: 1,
        title: "Processamento e Correções",
        description: "Os dados brutos passam por limpeza, remoção de ruídos e ajustes relacionados ao movimento da embarcação, garantindo maior precisão."
    },
    {
        id: 2,
        title: "Modelagem Digital",
        description: "As medições processadas são transformadas em um modelo 3D que representa fielmente as estruturas do fundo oceânico."
    },
    {
        id: 3,
        title: "Visualização e Interpretação",
        description: "O modelo gerado é convertido em mapas e visualizações interativas que facilitam a análise do terreno."
    },

];


const ACTIVE_TW_CLASS = "bg-gray-900"; 
const ANIMATION_INTERVAL_MS = 500;

function Intro() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [visibleSteps, setVisibleSteps] = useState(0);
    
    const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });

    
    const activeColor = `${ACTIVE_TW_CLASS} shadow-lg shadow-gray-900/50`;
    const defaultColor = "bg-gray-500 transition-colors duration-200";
    

    const TITLE_COLOR = "text-gray-900"; 
    const PARAGRAPH_COLOR = "text-gray-700";
    const STEP_TEXT_COLOR_ACTIVE = "text-gray-900"; 
    const CARD_DESCRIPTION_TEXT_COLOR = "text-white"; 

    useEffect(() => {
        let interval;
        
        if (isSectionVisible) {
            interval = setInterval(() => {
                setVisibleSteps((prev) => {
                    if (prev >= MAPPING_STEPS.length) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, ANIMATION_INTERVAL_MS);
        }

        return () => clearInterval(interval);
    }, [isSectionVisible]);

    const renderHeader = useCallback(
        () => (
            <div className="mb-12 md:mb-20 animate-fade-in-up">
                <h2
                    className={`text-4xl md:text-6xl font-extrabold leading-snug mb-4 md:mb-8 ${TITLE_COLOR}`}
                >
                    Análise de dados do oceano.
                </h2>
                <p
                    className={`text-lg md:text-xl leading-relaxed max-w-4xl ${PARAGRAPH_COLOR}`}
                >
                    Para mapear o oceano, os sistemas adotam uma progressão rigorosa capaz
                    de transformar o tempo de retorno do eco em dados topográficos. Veja
                    as quatro etapas que possibilitam a visualização do fundo do mar
                </p>
            </div>
        ),
        [TITLE_COLOR, PARAGRAPH_COLOR]
    );

    const renderStep = (step, index) => {
        const isActive = activeIndex === step.id;
        const isVisible = index < visibleSteps;

 
        const mobileActiveIndicator = `
             border-l-4 border-gray-300 pl-4 py-2 mb-4 
             md:border-l-0 md:pl-0 md:py-0 md:mb-0
             ${isActive || isVisible ? "border-gray-900" : ""}
         `;

        return (
            <div
                key={step.id}
                className={`
                     w-full md:w-1/4 flex flex-col items-start md:items-center relative z-20 cursor-pointer
                     transition-all duration-300 ease-out 
                     ${
                       isVisible
                         ? "opacity-100 translate-y-0"
                         : "opacity-0 translate-y-6"
                     }
                 `}
                onMouseEnter={() => setActiveIndex(step.id)}
                onMouseLeave={() => setActiveIndex(null)}
            >
                <div
                    className={`transition-all duration-300 w-full ${mobileActiveIndicator}`}
                >
                    <div
                        className={`
                             text-base font-semibold text-left md:text-center md:-mt-12 md:mb-6 whitespace-nowrap 
                             transition-colors duration-300
                             ${
                               isActive || isVisible
                                 ? STEP_TEXT_COLOR_ACTIVE 
                                 : "text-gray-700" 
                             }
                         `}
                    >
                        {step.title}
                    </div>

                    {isVisible && (
                        <p className={`text-sm mt-1 text-gray-600 md:hidden`}> 
                            {step.description}
                        </p>
                    )}
                </div>

                <div
                    className={`
                         hidden md:block 
                         w-4 h-4 rounded-full transition-all duration-300 transform 
                         ${isActive || isVisible ? activeColor : defaultColor}
                         ${isActive ? "scale-125" : "scale-100"}
                     `}
                ></div>

                {isActive && (
                    <div
                        className={`
                             hidden md:block 
                             absolute top-full mt-8 p-6 w-80 ${ACTIVE_TW_CLASS} rounded shadow-2xl 
                             transition-all duration-300 ease-out transform
                             origin-top opacity-100 scale-100
                         `}
                    >
                        <p className={`text-sm ${CARD_DESCRIPTION_TEXT_COLOR}`}>{step.description}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section className="w-full relative z-30">
            <div id="como-enxergamos" ref={sectionRef} className="relative bg-[#E9F3F4]">
                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col">
                    <div className="pt-16 md:pt-32">{renderHeader()}</div>

                    <div className="pb-16 md:pb-48 pt-4 md:pt-16">
                        <div
                            className={`flex flex-col md:flex-row md:justify-between relative`}
                        >
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-500 z-0 hidden md:block transform -translate-y-1/2"></div>

                            {MAPPING_STEPS.map((step, index) => renderStep(step, index))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;