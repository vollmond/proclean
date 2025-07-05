
//verificação dos elementos
console.log("✅ Script.js foi carregado e está a ser executado!");

document.addEventListener('DOMContentLoaded', () => {

  console.log("📄 O HTML carregou por completo. A procurar elementos...");

  const triggerLinks = document.querySelectorAll('.trigger-link');
  const titleElement = document.querySelector('#text-display-container h2');
  const textElement = document.querySelector('#text-display-container p');

  console.log("🔗 Links encontrados:", triggerLinks);
  console.log("<h2> Título encontrado:", titleElement);
  console.log("<p> Parágrafo encontrado:", textElement);

  // Verificação de segurança
  if (!titleElement || !textElement) {
    console.error("❌ ERRO: Não foi possível encontrar o contentor do título ou do texto. Verifique os IDs no HTML ('#text-display-container').");
    return; // Para o script se não encontrar os elementos essenciais
  }

    triggerLinks.forEach(link => {
    link.addEventListener('click', (event) => {

      event.preventDefault();

      console.log("🖱️ Link clicado!", link.textContent);

      const newTitle = link.dataset.title;
      const newText = link.dataset.text;

      console.log("🔄 A atualizar o texto para:", newTitle);

      // Atualização com leitura de links por innerHTML
      titleElement.textContent = newTitle;
      textElement.innerHTML = newText;


      
      triggerLinks.forEach(otherLink => otherLink.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Data atualizada
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
