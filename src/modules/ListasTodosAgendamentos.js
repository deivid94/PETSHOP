import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";

("use strict");

export default async function ListarTodosAgendamentos() {
  try {
    const listaDeAgendamentos = await getAgendamentos();
    console.log(`todos os agendamentos:${listaDeAgendamentos}`);
  } catch (error) {
    console.log("erro ao listar agendamentos");
  }
}
t    