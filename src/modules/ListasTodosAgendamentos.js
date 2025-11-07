import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";
import criarElementoHtml from "../services/criarElementoHtml.js";

export async function ListarTodosAgendamentos() {
  try {
    const listaDeAgendamentos = await getAgendamentos(`${URL}`);
    const card = document.querySelector(".card");
  

    for (let item of listaDeAgendamentos) {
      const data = criarElementoHtml("p", "data", item.data);
      const hora = criarElementoHtml("p", "hora", item.hora);
      const pet = criarElementoHtml("p", "pet", item.nomePet);
      const tutor = criarElementoHtml("p", "tutor", item.nome);
      const servico = criarElementoHtml("p", "servico", item.servico);

      // card.appendChild(pet)
    
      card.append(data, hora, pet, tutor, servico);
    }
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", error);
  }
}
