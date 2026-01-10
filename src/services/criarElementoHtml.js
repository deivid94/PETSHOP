export default function criarElementoHtml(tag, classe, texto) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.textContent = texto;
  return elemento;
}
