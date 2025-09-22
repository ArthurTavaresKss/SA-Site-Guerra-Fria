# Guerra Fria: Um Site Educacional Interativo

![Banner da Guerra Fria](imgs/banner-guerra-fria.png)  

## Descrição

Este repositório contém um site educacional interativo sobre a **Guerra Fria** (1945–1991), projetado para estudantes e entusiastas de história. O site explora os principais aspectos do conflito bipolar entre os Estados Unidos (e aliados da OTAN) e a União Soviética (e aliados do Pacto de Varsóvia), incluindo divisões geopolíticas, corrida armamentista, conflitos indiretos, corrida espacial, espionagem, descolonização e o fim do período.

O conteúdo é apresentado de forma visual e interativa, com elementos como timelines, carrosséis, animações e modais para engajar o usuário. O site é responsivo e utiliza HTML5, CSS3 e JavaScript vanilla para criar uma experiência imersiva sem dependências externas.

Este projeto foi desenvolvido como parte de um trabalho escolar, inspirado em fontes históricas reais, e inclui hyperlinks para "jornais históricos" que aprofundam tópicos específicos (ex.: Corrida Espacial).

### Objetivos do Projeto
- Educar sobre a Guerra Fria de maneira acessível e interativa.
- Demonstrar habilidades em desenvolvimento web front-end, incluindo animações, observers e manipulação de DOM.
- Fornecer uma estrutura modular para expansão futura (ex.: adicionar mais jornais ou seções).

## Funcionalidades Principais

O site é dividido em seções temáticas, cada uma com interações únicas implementadas via JavaScript (arquivo `main.js`). Aqui vai um overview:

### 1. Menu Lateral Responsivo
   - Toggle de menu com ícone animado (de menu para fechar).
   - Links para seções principais: Home, O Mundo Bipolar, Cortina de Ferro, Corrida Armamentista, Conflitos Indiretos, Corrida Espacial, Espionagem, Descolonização e Fim da Guerra Fria.

### 2. O Mundo Bipolar
   - Timeline interativa com botões para anos chave (1945, 1949, 1955, 1962, 1979, 1989, 1991).
   - Exibe blocos geopolíticos (EUA/OTAN, Neutro, URSS/Pacto de Varsóvia) com listas de países, ogivas nucleares e porcentagens de PIB mundial.
   - Animações de fade-in ao scroll (usando IntersectionObserver).

### 3. Cortina de Ferro e o Muro de Berlim
   - Seção com imagens comparativas (Berlim Oriental vs. Ocidental).
   - Botão para alternar entre imagens com HUD (heads-up display) temporário indicando o lado exibido.

### 4. Corrida Armamentista e Ameaça Nuclear
   - Barras de progresso animadas mostrando o crescimento de ogivas nucleares (EUA vs. URSS).
   - Contadores numéricos que incrementam dinamicamente ao scroll.
   - Modal explicativo sobre **MAD (Mutual Assured Destruction)**, ativado por botão.

### 5. Conflitos Indiretos
   - Carrossel horizontal de conflitos (ex.: Guerra da Coreia, Vietnã, Crise dos Mísseis em Cuba).
   - Setas de navegação para esquerda/direita.
   - Cada item inclui descrição breve e link "Saiba Mais" para jornais históricos.

### 6. Corrida Espacial
   - Galeria de imagens em carrossel representando marcos (ex.: Sputnik, Apollo 11).
   - Links para jornais detalhados, como o arquivo `JornalCorridaEspacial.html` (estilizado como um jornal de época com manchetes, imagens e anúncios fictícios).

### 7. Espionagem e Contraespionagem
   - Navegação por cliques: Clique à esquerda para voltar, à direita para avançar entre "páginas" temáticas (ex.: MI6 vs. KGB, Stasi, James Bond vs. Realidade).
   - Animação de transição "TV estática" durante mudanças de página.
   - Cursor personalizado (setas esquerda/direita) ao hover na seção.

### 8. Descolonização
   - Painéis por décadas (1950, 1960, 1970, 1980) com listas de independências.
   - Botões para trocar de década com transições suaves (translateX).
   - Destaque visual para a década ativa.

### 9. Fim da Guerra Fria
   - Linha do tempo vertical com scroll via wheel (roda do mouse).
   - Barra de progresso e pontos de checkpoint que mudam o background da seção conforme o avanço.
   - Suporte a múltiplos itens com dados customizados (ex.: background images ou cores).

### 10. Jornais Históricos
   - Páginas separadas (ex.: `JornalCorridaEspacial.html`) estilizadas como jornais antigos.
   - Incluem manchetes, artigos, imagens e "anúncios" fictícios da época.
   - Acessíveis via links "Saiba Mais" nas seções principais.

### Recursos Gerais
- **Animações e Observers**: Uso de IntersectionObserver para fade-ins em elementos ao scroll.
- **Sem Dependências**: Todo o código é vanilla JS, sem bibliotecas como jQuery ou frameworks.
- **Acessibilidade**: Alt texts em imagens e ARIA roles implícitos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com sections, articles e data attributes para interatividade.
- **CSS3**: Animações (@keyframes), transições, flexbox/grid para layouts, e estilos modulares (10 arquivos CSS na pasta `styles` para separar concerns como reset, menu, timelines etc.).
- **JavaScript (ES6+)**: Manipulação de DOM, event listeners (click, scroll, wheel, mousemove), animações dinâmicas e observers.
- **Imagens e Assets**: Pasta `imgs` com ícones, fotos históricas e elementos gráficos (ex.: setas, banners).

## Estrutura de Pastas

```
guerra-fria-site/
├── index.html              # Página principal com todo o conteúdo
│
├── main.js                 # Script principal para interatividades
│
├── imgs/                   # Pasta de imagens (ex.: menu.png, fechar.png, ocidente.jpg, etc.)
│   │
│   ├── Menufria.png
│   ├── setaesquerda.png
│   ├── setadireita.png
│   └── ... (outras imagens históricas e assets)
│
├── styles/                 # Pasta com 10 arquivos CSS modulares
│   │
│   ├── style1.css
│   ├── style2.css
│   ├── style3.css
│   ├── style4.css
│   ├── style5.css
│   ├── style6.css
│   ├── style7.css
│   ├── style8.css
│   ├── style9.css
│   ├── style10.css
│
├── jornais/                # Pasta com páginas de jornais históricos
│   │
│   ├── JornalCorridaEspacial.html  # Exemplo: Jornal sobre Apollo 11
│   └── ... (outros jornais para conflitos, espionagem, etc.)
│
└── README.md               # Esta documentação
```

## Como Rodar o Projeto

1. **Clone o Repositório**:
   ```
   git clone https://github.com/ArthurTavaresKss/SA-Site-Guerra-Fria.git
   ```

2. **Abra a pasta no VS Code e rode no Live Server**:
   - Abra a pasta clonada no Visual Studio Code.
   - Instale a extensão Live Server, nas extensões do VS Code.
   - Abra o arquivo `index.html` e clique no botão no canto inferior direito "Go Live".

3. **Desenvolvimento**:
   - Edite os arquivos HTML/CSS/JS conforme necessário.
   - Teste interações em diferentes tamanhos de tela.
   - Para adicionar mais jornais: Crie novos HTML na pasta `jornais/` e linke via "Saiba Mais" no `index.html`.

## Contribuições

Contribuições são bem-vindas! Siga estes passos:
1. Fork o repositório.
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`.
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`.
4. Push para a branch: `git push origin feature/nova-funcionalidade`.
5. Abra um Pull Request.

Ideias para melhorias:
- Adicionar mais jornais históricos.
- Implementar suporte a touch para mobile (ex.: swipe no carrossel).
- Incluir áudio/vídeo embedados (ex.: discursos de Kennedy).
- Adicionar responsividade.

## Créditos

- **Autores**: 👤 Arthur Tavares | 👤 Eduardo Sasaki | 👤 Gabriel Flores
- **Fontes Históricas**: Baseado em fatos reais da Guerra Fria; imagens e dados de domínio público.
- **Inspirações**: Sites educativos como Khan Academy e documentários da BBC.

Se você gostou do projeto, dê uma ⭐ no GitHub! Para dúvidas, abra uma issue. Boa exploração histórica! 🚀
