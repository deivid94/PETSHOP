import { postAgendamento } from "../services/PostAgendamento.js";

const form = document.getElementById("agendar");

e.preventDefault();
form.addEventListener("submit", async (e) => {
  const dados = new FormData(form);
  const agendamento = Object.fromEntries(dados.entries())
  try {
    const resultado = await postAgendamento(agendamento)
    console.log (resultado)
  } catch (error){
    console.log (error)
  }
});