import React, { useState, useEffect, useCallback } from 'react';

const HIGHLIGHT_COLOR = 'text-[#54D1E8]';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = useCallback((e, href) => {
        e.preventDefault();
        
        const shouldCloseMenu = isOpen;
        if (shouldCloseMenu) {
            setIsOpen(false);
        }

        const delay = shouldCloseMenu ? 300 : 0; 

        setTimeout(() => {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, delay);
    }, [isOpen]);

    const linkClasses = `text-white/90 hover:${HIGHLIGHT_COLOR} transition-colors font-medium text-lg`;

    const links = [
        { href: "#inicio", label: "Início" },
        { href: "#como-enxergamos", label: "O Invisível" },
        { href: "#tecnologia", label: "Tecnologia" },
        { href: "#ciencia-meio-ambiente", label: "Ciência & Meio Ambiente" },
    ];

    const backgroundClasses = `
        px-8 py-3 rounded-full border transition-all duration-300
        shadow-lg backdrop-blur-md
        ${scrolled 
            ? 'bg-[#0A1E3A]/80 border-white/20 shadow-xl' 
            : 'bg-white/10 border-white/10'
        }
    `;

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            
            <div className="absolute top-6 right-6 z-50 sm:hidden"> 
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
                    aria-expanded={isOpen}
                    className={`p-2 rounded-full transition-colors duration-300
                        ${scrolled ? 'bg-[#0A1E3A]/70' : 'bg-white/10'}
                        text-white/90 hover:${HIGHLIGHT_COLOR}`}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            <nav className="relative top-6 w-full hidden sm:flex justify-center">
                <div className={`flex items-center justify-center gap-8 ${backgroundClasses}`}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={linkClasses}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out sm:hidden
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div 
                    className="absolute inset-0 bg-black/70"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />

                <div 
                    className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-[#0A1E3A] shadow-2xl 
                                transition-transform duration-300 ease-in-out p-6 flex flex-col items-center justify-center
                                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)} 
                            className={`${linkClasses} text-2xl py-4 w-full text-center hover:bg-white/10`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default NavBar;