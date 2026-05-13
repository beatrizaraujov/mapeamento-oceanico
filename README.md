# Mapeamento Oceânico — Interface Batimétrica Imersiva

> **Status:** Concluído.
> 🌊 **Deploy:** [https://mapeamento-oceanico-o3jd.vercel.app/]

Este projeto é uma ponte entre a Geociência e a Engenharia de Software. Desenvolvi uma interface imersiva que traduz a complexidade dos dados batimétricos em uma jornada visual, utilizando tecnologias modernas de front-end para garantir uma navegação fluida e informativa.

## 🛠️ Engenharia e Performance

Para criar o efeito de "mergulho" narrativo sem sacrificar o desempenho da página, implementei:

### 1. Manipulação de DOM e Efeitos de Scroll
Utilizei a **Intersection Observer API** para gerenciar as animações e transições de seção. 
- [cite_start]**Lógica:** `if (entry.isIntersecting)` >>> O sistema dispara gatilhos de animação apenas quando o conteúdo está visível, reduzindo o custo de processamento e garantindo 60 FPS (frames por segundo) durante o scroll.

### 2. Otimização de Ativos (Lazy Loading)
[cite_start]Como a interface lida com imagens e dados técnicos sobre oceanografia, implementei estratégias de **Lazy Loading** para garantir que a aplicação carregue instantaneamente, priorizando o conteúdo acima da dobra (above the fold).

### 3. Modularização de Conteúdo
A aplicação foi estruturada em 4 etapas narrativas independentes:
- **Timeline Interativa:** Sequência lógica de processamento de dados (Aquisição -> Modelagem).
- [cite_start]**Deep Tech:** Seções focadas em tecnologias de exploração marinha (ROVs/AUVs, Sonar)[cite: 36].

## 🧪 Stack Técnica
- [cite_start]**React + Vite:** Para uma fundação rápida, modular e escalável[cite: 34].
- [cite_start]**Tailwind CSS:** Estilização responsiva e consistente com foco em acessibilidade visual (A11y)[cite: 34, 38].
- [cite_start]**JavaScript (ES6+):** Lógica robusta para manipulação de dados científicos e estados de interface[cite: 34].

## 🌍 Visão de Produto
[cite_start]Este projeto demonstra minha habilidade em transformar temas complexos em interfaces acessíveis, mantendo o rigor técnico e a conformidade com padrões de acessibilidade web (A11y) e compatibilidade cross-browser.
