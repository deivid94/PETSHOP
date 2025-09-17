import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";

const periodo = document.getElementsByClassName("");

export async function ListarTodosAgendamentos() {
  try {
    const listaDeAgendamentos = await getAgendamentos(URL);
    console.log(`todos os agendamentos:${listaDeAgendamentos}`);
  } catch (error) {
    console.log("erro ao listar agendamentos");
  }
}
 