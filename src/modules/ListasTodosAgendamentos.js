import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";

export async function ListarTodosAgendamentos() {
  try {
    const listaDeAgendamentos = await getAgendamentos(`${URL}`);
    for (let item of listaDeAgendamentos) {
      console.log(`meus items:`, item);
    }
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", error);
  }
}
