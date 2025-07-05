// Adicionamos "console.log" para vermos o que o script está a fazer.
// Estes logs vão aparecer na Consola do seu navegador.

console.log("✅ Script.js foi carregado e está a ser executado!");

document.addEventListener('DOMContentLoaded', () => {

  console.log("📄 O HTML carregou por completo. A procurar elementos...");

  // Seleciona todos os elementos com que vamos interagir
  const triggerLinks = document.querySelectorAll('.trigger-link');
  const titleElement = document.querySelector('#text-display-container h2');
  const textElement = document.querySelector('#text-display-container p');

  // Vamos verificar se os elementos foram encontrados
  console.log("🔗 Links encontrados:", triggerLinks);
  console.log("<h2> Título encontrado:", titleElement);
  console.log("<p> Parágrafo encontrado:", textElement);

  // Verificação de segurança: só continuar se os elementos de texto existirem
  if (!titleElement || !textElement) {
    console.error("❌ ERRO: Não foi possível encontrar o contentor do título ou do texto. Verifique os IDs no HTML ('#text-display-container').");
    return; // Para o script se não encontrar os elementos essenciais
  }

  // Adiciona um "ouvinte" de cliques a cada um dos nossos links de navegação
  triggerLinks.forEach(link => {
    link.addEventListener('click', (event) => {

      // Previne o comportamento padrão do link
      event.preventDefault();

      console.log("🖱️ Link clicado!", link.textContent);

      // Pega nos dados guardados nos atributos data-* do link que foi clicado
      const newTitle = link.dataset.title;
      const newText = link.dataset.text;

      console.log("🔄 A atualizar o texto para:", newTitle);

      // --- ATUALIZA O CONTEÚDO NA PÁGINA ---
      titleElement.textContent = newTitle;
      textElement.innerHTML = newText;


      // Lógica para a classe 'active' (opcional)
      triggerLinks.forEach(otherLink => otherLink.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Atualiza o ano no rodapé
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
