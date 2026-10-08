document.addEventListener("DOMContentLoaded", () => {
    
    // ========================================================
    // 1. FUNCIONALIDADE: COPIAR E-MAIL AO CLICAR
    // ========================================================
    const linkEmail = document.querySelector('a[href^="mailto:"]');
    if (linkEmail) {
        linkEmail.addEventListener("click", (evento) => {
            const email = "marianapaiva490@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                console.log("E-mail copiado com sucesso para a área de transferência!");
            });
        });
    }

    // ========================================================
    // 2. FUNCIONALIDADE: SCROLL SPY (MENU ATUALIZANDO)
    // ========================================================
    const secoes = document.querySelectorAll("section");
    const linksMenu = document.querySelectorAll(".menu-navegacao .link-pagina");

    window.addEventListener("scroll", () => {
        let secaoAtual = "";

        secoes.forEach((secao) => {
            const topoSecao = secao.offsetTop;
            if (scrollY >= topoSecao - 150) {
                secaoAtual = secao.getAttribute("id");
            }
        });

        linksMenu.forEach((link) => {
            link.classList.remove("ativo");
            if (link.getAttribute("href").includes(secaoAtual)) {
                link.classList.add("ativo");
            }
        });
    });
});
// ========================================================
// 3. FUNCIONALIDADE: ANIMAÇÃO DE REVELAÇÃO (FADE-IN)
// ========================================================
const elementosRevelar = document.querySelectorAll('.revelar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('ativo');
        } else {
            entry.target.classList.remove('ativo');
        }
    });
}, { threshold: 0.2 });

elementosRevelar.forEach(el => observer.observe(el));