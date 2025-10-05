import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";

export async function ListarTodosAgendamentos() {
  const agendamento = document.getElementsByClassName("agendamento");
  const hora = document.getElementById('hora')
  const pet = document.getElementById('pet')
  const tutora = document.getElementById('tutora')
  const servico = document.getElementById('servico')

  try {
    const listaDeAgendamentos = await getAgendamentos(`${URL}`);
    for(item of listaDeAgendamentos){
      console.log (item)
    }

    
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", code);
  }
}
