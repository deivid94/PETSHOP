import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";
import criarElementoHtml from "../services/criarElementoHtml.js";

export async function ListarTodosAgendamentos() {
  try {
    const listaDeAgendamentos = await getAgendamentos(`${URL}`);
    const card = document.getElementsByClassName("card")
    console.log(card)

    for (let item of listaDeAgendamentos) {
      console.log(item.nome);
      const pet = criarElementoHtml("p", "pet", item.petNome);
      const tutor = criarElementoHtml("p", "tutor", item.nome);
      const servico = criarElementoHtml("p", "servico", item.servico)
      

      // pet.textContent = `${item.petNome}`
      // tutor.textContent= `${item.tutor}`
      // card.appendChild(pet)
      card.appendChild(pet, tutor, servico);
      console.log(card)
    }
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", error);
  }
}
