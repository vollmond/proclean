
// Adicionamos "console.log" para vermos o que o script está a fazer.
console.log("✅ Script.js foi carregado e está a ser executado!");

document.addEventListener('DOMContentLoaded', () => {

    console.log("📄 O HTML carregou por completo. A procurar elementos...");

    // --- Seletores dos elementos ---
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('main-nav');
    const triggerLinks = document.querySelectorAll('.trigger-link');
    const titleElement = document.querySelector('#text-display-container h2');
    const textElement = document.querySelector('#text-display-container p');
    
    // --- Verificação dos elementos ---
    console.log("🍔 Hamburger encontrado:", hamburger);
    console.log("🗺️ Menu de Navegação encontrado:", navMenu);
    console.log("🔗 Links de gatilho encontrados:", triggerLinks);
    console.log("<h2> Elemento de Título encontrado:", titleElement);
    console.log("<p> Elemento de Parágrafo encontrado:", textElement);

    // --- Lógica do Menu Hamburger ---
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            console.log("🖱️ Ícone Hamburger clicado!");
            navMenu.classList.toggle('is-active');
        });
    }

    // --- Lógica da Troca de Conteúdo ---
    // Verificação de segurança: só continuar se os elementos de texto existirem
    if (!titleElement || !textElement) {
        console.error("❌ ERRO: Não foi possível encontrar o contentor do título ou do texto. Verifique os IDs no HTML ('#text-display-container').");
        return; 
    }
    
   triggerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const newTitle = link.dataset.title;
        const newText = link.dataset.text;

        // Atualiza o conteúdo na página
        titleElement.textContent = newTitle; // O título é só texto, isto está correto.
        textElement.innerHTML = newText;    // <<< A CORREÇÃO ESTÁ AQUI

        // Bónus: Fecha o menu hamburger após clicar num link (importante para mobile)
        if (navMenu.classList.contains('is-active')) {
            navMenu.classList.remove('is-active');
        }
    });
});
    // --- Lógica do Rodapé ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
