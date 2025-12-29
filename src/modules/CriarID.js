export default function criarID() {
  const ramdomString = Math.random().toString(36).replace(".", "");

  const id = `${ramdomString}`;

  return id;
}
