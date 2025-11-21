import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";
import criarElementoHtml from "../services/criarElementoHtml.js";
import verificaDataAgendamento from "../services/criarElementoHtml.js";
export async function ListarTodosAgendamentos() {
  try {
    const dataSelecionada = await verificaDataAgendamento();

    if (!dataSelecionada) {
      console.log("Nenhuma data selecionada para filtrar");
      return;
    }

    const listaDeAgendamentos = await getAgendamentos(`${URL}`);

    const divmanutino  = criarElementoHtml("div", "matutino")
    const divespertino = criarElementoHtml("div", "vespertino")
    const divnoturno = criarElementoHtml("div", "noturno")

    for (let item of listaDeAgendamentos) {
      const card = document.createElement("div");
      card.classList.add("card");

      const data = criarElementoHtml("p", "data", item.data);
      const hora = criarElementoHtml("p", "hora", item.hora);
      const pet = criarElementoHtml("p", "pet", item.nomePet);

      const tutor = criarElementoHtml("p", "tutor", item.nome);
      const servico = criarElementoHtml("p", "servico", item.servico);

      card.append(data, hora, pet, tutor, servico);

      const dataformata = parseInt(item.hora.slice(0, 2));
      if (dataformata >= 9 && dataformata < 12) {
        const manha = document.querySelector(".matutino")
        manha.append(card)
      } else if (dataformata >= 12 && dataformata < 17) {
        const tarde = document.querySelector(".vespertino")
        tarde.append(card);
      } else {
        const noite = document.querySelector(".noturno")
        noite.append(card);
      }
    }
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", error);
  }
}
