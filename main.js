// menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("side-menu");
const icon = document.getElementById("icon");

const menuIcon = "imgs/Menufria.png";
const closeIcon = "imgs/fecharfria.png";

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
  btn.classList.toggle("close-mode");

  icon.src = menu.classList.contains("open") ? closeIcon : menuIcon;
  icon.alt = menu.classList.contains("open") ? "Fechar menu" : "Abrir menu";
});
// observer para animaçao
const elementos = document.querySelectorAll(
  "#title, #subtitle, .btn, .bipolartext, .timeline, .tabelas, .muro, .tv-section, #textconfli, .jornal-container, .saiba"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("apareceu");
      } else {
        entry.target.classList.remove("apareceu");
      }
    });
  },
  { threshold: 0.2 }
);
elementos.forEach((el) => {
  observer.observe(el);
});

//botoes de ir para o conteudo
function irconteudo() {
  const conteudo = document.getElementById("conteudo");
  if (conteudo) {
    conteudo.scrollIntoView({ behavior: "smooth" });
  }
}
// timeline dos anos la
const botoes = document.querySelectorAll("#anos button");
const tabelas = document.querySelectorAll(".tabela");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const ano = botao.dataset.ano;

    botoes.forEach((btn) => btn.classList.remove("ativo"));
    tabelas.forEach((tab) => tab.classList.remove("ativo"));
    document.getElementById("ano" + ano).classList.add("ativo");
    botao.classList.add("ativo");
  });
});
if (tabelas.length > 0) {
  tabelas[0].classList.add("ativo");
  botoes[0].classList.add("ativo");
}
// antes e dps foto

let estado = "antes";
function trocar() {
  const img = document.getElementById("tvImage");
  const btn = document.querySelector(".tv-controls button");
  const hud = document.getElementById("tvHud");

  if (estado === "antes") {
    img.src = "imgs/ocidente.jpg";
    img.alt = "Berlim Ocidental";
    hud.textContent = "Berlim Ocidental";
    estado = "depois";
  } else {
    img.src = "imgs/oriente.png";
    img.alt = "Berlim Oriental";
    hud.textContent = "Berlim Oriental";
    estado = "antes";
  }

  hud.classList.add("mostrar");
  setTimeout(() => {
    hud.classList.remove("mostrar");
  }, 2500);
}
// armamentista
const barras = document.querySelectorAll(".barra");

function animaBarras() {
  barras.forEach((barra) => {
    const fill = barra.querySelector(".fill");
    const valor = barra.getAttribute("data-value");
    const ogivas = barra.getAttribute("data-ogivas");

    const posicao = barra.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela && !fill.classList.contains("animada")) {
      fill.classList.add("animada");
      fill.style.width = valor + "%";

      let contador = 0;
      let incremento = Math.ceil(ogivas / 100);

      let intervalo = setInterval(() => {
        if (contador >= ogivas) {
          fill.querySelector(".valor").textContent =
            parseInt(ogivas).toLocaleString("pt-BR");
          clearInterval(intervalo);
        } else {
          contador += incremento;
          fill.querySelector(".valor").textContent =
            contador.toLocaleString("pt-BR");
        }
      }, 20);
    }
  });
}
window.addEventListener("scroll", animaBarras);
//pop up
const modal = document.getElementById("madModal");
const mad = document.querySelector(".btnmad");
const span = document.querySelector(".close");

mad.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//jornal
const wrapper = document.querySelector(".jornal-wrapper");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;
const total = document.querySelectorAll(".jornal").length;

function updateCarousel() {
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

rightArrow.addEventListener("click", () => {
  if (currentIndex < total - 1) {
    currentIndex++;
    updateCarousel();
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
//espionagem
const espionagem = document.querySelector("#espionagem");

const pages = espionagem.querySelectorAll(".pageum"); // pega apenas as páginas dentro da seção
let currentPage = 0;

pages[currentPage].classList.add("ativo");

const transition = espionagem.querySelector(".transition-tv"); // animação da seção

// Função de clique
function clickHandler(e) {
  const middle = window.innerWidth / 2;

  // só responde se o clique estiver dentro da seção espionagem
  if (!espionagem.contains(e.target)) return;

  if (transition.style.animation) return; // bloqueia enquanto anima

  if (e.clientX > middle && currentPage < pages.length - 1) {
    mudarPagina(currentPage + 1);
  } else if (e.clientX < middle && currentPage > 0) {
    mudarPagina(currentPage - 1);
  }
}

document.addEventListener("click", clickHandler);

// Função que troca de página com animação
function mudarPagina(nextPage) {
  // inicia animação
  transition.style.animation = "tv-circle 1s ease-in-out";

  // espera metade da animação (quando tela fica preta) para trocar
  setTimeout(() => {
    pages[currentPage].classList.remove("ativo");
    currentPage = nextPage;
    pages[currentPage].classList.add("ativo");
  }, 500); // metade de 1s

  // reseta a animação no final
  transition.addEventListener(
    "animationend",
    () => {
      transition.style.animation = "";
    },
    { once: true }
  );
}

// espionagem parte do mouse seta

espionagem.addEventListener("mousemove", (e) => {
  const metade = espionagem.offsetWidth / 2;
  const x = e.clientX - espionagem.getBoundingClientRect().left;

  if (x < metade) {
    espionagem.style.cursor = "url('imgs/setaesquerda.png') 16 16, auto";
  } else {
    espionagem.style.cursor = "url('imgs/setadireita.png') 16 16, auto";
  }
});

espionagem.addEventListener("mouseleave", () => {
  espionagem.style.cursor = "auto";
});
//descolonização
const container = document.querySelector(".decadas-container");
const decadas = Array.from(document.querySelectorAll(".decada"));
const allBtns = Array.from(
  document.querySelectorAll(".decada-selector button")
);

// mapa: '50' -> índice do painel
const idxByDecada = decadas.reduce((acc, el, i) => {
  acc[el.dataset.decada] = i;
  return acc;
}, {});

function goTo(target) {
  const index = idxByDecada[target];
  if (index === undefined) return;

  container.style.transform = `translateX(-${index * 100}%)`;
  decadas.forEach((d, i) => d.classList.toggle("ligado", i === index));
  allBtns.forEach((b) =>
    b.classList.toggle("ligado", b.dataset.target === target)
  );
}

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => goTo(btn.dataset.target));
});

// estado inicial
const start = Math.max(
  0,
  decadas.findIndex((d) => d.classList.contains("ligado"))
);
container.style.transform = `translateX(-${start * 100}%)`;
allBtns.forEach((b) =>
  b.classList.toggle(
    "ligado",
    b.dataset.target === decadas[start].dataset.decada
  )
);

// linha do tempo
const outer = document.querySelector(".outer");
const progress = outer.querySelector(".scroll-progress");
const pointsContainer = outer.querySelector(".scroll-points");

// Criar pontos dinamicamente (um a cada 100vw)
const numPoints = Math.ceil(outer.scrollWidth / window.innerWidth);
for (let i = 0; i < numPoints; i++) {
  const point = document.createElement("div");
  point.classList.add("scroll-point");
  pointsContainer.appendChild(point);
}
const points = Array.from(pointsContainer.querySelectorAll(".scroll-point"));

outer.addEventListener("wheel", (e) => {
  const atStart = outer.scrollLeft === 0;
  const atEnd =
    Math.ceil(outer.scrollLeft + outer.clientWidth) >= outer.scrollWidth;

  if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
    e.preventDefault();
    outer.scrollLeft += e.deltaY;
  }

  updateLine();
});
function updateLine() {
  const maxScroll = outer.scrollWidth - outer.clientWidth;
  const percent = (outer.scrollLeft / maxScroll) * 100;
  progress.style.width = percent + "%";
  const step = window.innerWidth;

  const items = document.querySelectorAll(".it");
  const hc = document.querySelector(".horizontal-content");

  points.forEach((point, i) => {
    const pointPos = ((i * step) / outer.scrollWidth) * 100;

    if (percent >= pointPos) {
      point.classList.add("atv");

      const bg = items[i].dataset.bg;

      if (bg.startsWith("url")) {
        // se for imagem
        hc.style.backgroundImage = bg;
        hc.style.backgroundSize = "cover";
        hc.style.backgroundPosition = "center";
        hc.style.backgroundRepeat = "no-repeat";
        hc.style.backgroundAttachment = "fixed"
      } else {
        // fallback se for cor
        hc.style.background = bg;
      }
    } else {
      point.classList.remove("atv");
    }
  });
}