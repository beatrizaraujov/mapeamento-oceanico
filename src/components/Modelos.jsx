import React, { useState } from "react";

import SonarImage from '../assets/sonar.png';
import ROVsImage from '../assets/ROVs.webp';
import SideScanImage from '../assets/side-sonar.png';
import SamplersImage from '../assets/Samplers.jpg';

const DADOS_TECNOLOGIA = [
    {
        id: 'ROVs',
        nome: 'ROVs/AUVs (Veículos Submarinos)',
        description:
            'Exploram zonas abissais inacessíveis ao ser humano, registrando imagens em alta precisão e coletando dados estruturais do ambiente.',
        imagem: ROVsImage,
        altText: 'Veículo Submarino Autônomo'
    },
    {
        id: 'SONAR',
        nome: 'Sonar Multifeixe',
        description:
            'Emite feixes acústicos que modelam o relevo submarino em três dimensões, permitindo análises batimétricas de alta resolução.',
        imagem: SonarImage,
        altText: 'Sonar Multifeixe'
    },
    {
        id: 'SIDESCAN',
        nome: 'Sonar de Varredura Lateral',
        description:
            'Produz imagens acústicas detalhadas que revelam texturas, naufrágios e padrões sedimentares ao longo do fundo marinho.',
        imagem: SideScanImage,
        altText: 'Side Scan Sonar'
    },
    {
        id: 'SAMPLERS',
        nome: 'Coletores de Amostras (Samplers)',
        description:
            'Capturam sedimentos, organismos e minerais das camadas profundas, permitindo análises geoquímicas e biológicas.',
        imagem: SamplersImage,
        altText: 'Equipamento de coleta'
    },
];

export default function Modelos() {

    const [tecnologiaAtiva, setTecnologiaAtiva] = useState(DADOS_TECNOLOGIA[0].id);
    const tecnologiaAtual = DADOS_TECNOLOGIA.find(item => item.id === tecnologiaAtiva);

    const handleClick = (id) => {
        setTecnologiaAtiva(id === tecnologiaAtiva ? null : id);
    };

    return (
        <section
            id="tecnologia"
            className="
                bg-[#E9F3F4] text-gray-900 
                pt-24 md:pt-32 pb-20 
                px-4 md:px-8
            "
        >

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">

                <div className="hidden md:flex w-1/2 items-center justify-center order-1 md:order-2">
                    {tecnologiaAtual && (
                        <img
                            key={tecnologiaAtual.id}
                            src={tecnologiaAtual.imagem}
                            alt={tecnologiaAtiva.altText}
                            className="
                                max-w-full max-h-[500px]
                                object-contain 
                                transition-opacity duration-500
                            "
                        />
                    )}
                </div>

                <div className="hidden md:flex w-1/2 flex-col gap-4 order-2 md:order-1">
                    {DADOS_TECNOLOGIA.map((item) => (
                        <div
                            key={item.id}
                            className={`
                                p-6 rounded-xl cursor-pointer transition-all bg-white
                                shadow-md hover:shadow-lg border-2
                                ${tecnologiaAtiva === item.id ? "border-blue-600" : "border-transparent"}
                            `}
                            onClick={() => setTecnologiaAtiva(item.id)}
                        >
                            <h6 className="text-xl font-semibold text-gray-900">
                                {item.nome}
                            </h6>
                            <p className="text-gray-600 mt-1">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="md:hidden text-center px-2 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Cartografia das Profundezas
                    </h3>
                    <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                        Abaixo estão os instrumentos responsáveis por revelar a arquitetura
                        invisível do oceano — tecnologias que transformam pressão, escuridão e
                        silêncio em dados científicos de alta resolução. Toque para explorar.
                    </p>
                </div>

                <div className="md:hidden w-full space-y-4 mt-4">

                    {DADOS_TECNOLOGIA.map((item) => {
                        const isOpen = tecnologiaAtiva === item.id;

                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md border border-gray-200"
                            >
                                <button
                                    onClick={() => handleClick(item.id)}
                                    className="
                                        w-full p-5 flex justify-between items-center
                                        text-left
                                    "
                                >
                                    <h6 className="text-lg font-semibold text-gray-900">
                                        {item.nome}
                                    </h6>

                                    <span className="text-2xl">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`
                                        overflow-hidden transition-all duration-300
                                        ${isOpen ? "max-h-[650px] p-5 pt-0" : "max-h-0 p-0"}
                                    `}
                                >
                                    <img
                                        src={item.imagem}
                                        alt={item.altText}
                                        className="
                                            w-full 
                                            max-h-[260px]
                                            object-contain 
                                            rounded-lg 
                                            mb-3
                                        "
                                    />

                                    <p className="text-gray-700 text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}