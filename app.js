// 1. Seleciona o ícone pelo ID ou Classe
const btnTema = document.getElementById('btn-tema');

// 2. Adiciona um evento de clique ao ícone
btnTema.addEventListener('click', () => {
  // O 'toggle' adiciona a classe se ela não existir, e remove se já existir
  document.body.classList.toggle('modo-escuro');
});

