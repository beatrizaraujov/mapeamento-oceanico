import React from 'react';

function Hero() {
    return (
        <section id="inicio" className="relative h-screen w-full overflow-hidden bg-[#1B0D39]"> 
            
            <div className="absolute inset-0 z-0 opacity-50">
                <video
                    src="/img/tipografia.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                ></video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[#21448] opacity-20"></div>
            </div>

            <div className="relative z-10 flex h-full w-full items-end justify-center pb-24 px-6 sm:px-10">

                <div className="
                    flex max-w-7xl mx-auto 
                    flex-col md:flex-row 
                    items-center md:items-end 
                    justify-center
                    text-center md:text-left
                ">
                    
                    <h3
                        className="
                            text-[#E9F3F4] font-extrabold 
                            text-2xl sm:text-3xl md:text-4xl 
                            md:pr-10 
                            mb-8 md:mb-0
                            md:relative md:top-2 
                        "
                    >
                        A Ciência por Trás da Cartografia das <br /> 
                        Profundezas: Como Decodificamos o <br /> 
                        Território Mais Secreto do Planeta
                    </h3>

                    <p
                        className="
                            text-[#E9F3F4]
                            text-base sm:text-lg md:text-xl 
                            max-w-lg leading-relaxed 
                            md:pl-10
                        "
                    >
                        A partir desse eco, modelos matemáticos reconstroem montanhas, falhas e vales submersos com detalhes impressionantes. A sensação é de desvendar um novo planeta aqui na Terra, um fascínio que torna essa ciência irresistível a todos.
                    </p>
                </div>
                
            </div>

            <div className="absolute bottom-8 left-1/2 z-20 animate-bounce transform -translate-x-1/2">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5"
                    stroke="#E9F3F4"
                    className="size-10"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" 
                    />
                </svg>
            </div>

        </section>
    );
}

export default Hero;