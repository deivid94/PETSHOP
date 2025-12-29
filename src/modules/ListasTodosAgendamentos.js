import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";
import criarElementoHtml from "../services/criarElementoHtml.js";
import verificaDataAgendamento from "../services/criarElementoHtml.js";
import dayjs from "dayjs";

export async function ListarTodosAgendamentos() {
  try {
    const dataSelecionada = await verificaDataAgendamento();

    if (!dataSelecionada) {
      console.log("Nenhuma data selecionada para filtrar");
      return;
    }

    const listaDeAgendamentos = await getAgendamentos(`${URL}`);

    criarElementoHtml("div", "matutino");
    criarElementoHtml("div", "vespertino");
    criarElementoHtml("div", "noturno");

    for (let item of listaDeAgendamentos) {
      const card = document.createElement("div");
      card.classList.add("card");

      const data = criarElementoHtml("p", "data", item.data);
      const hora = criarElementoHtml("p", "hora", item.hora);
      const pet = criarElementoHtml("p", "pet", item.nomePet);
      const tutor = criarElementoHtml("p", "tutor", item.nome);
      const servico = criarElementoHtml("p", "servico", item.servico);
      const botaoDelete = criarElementoHtml("a", "link", "remover agendamento");

      card.append(data, hora, pet, tutor, servico, botaoDelete);
      

      const horaformada = parseInt(item.hora.slice(0, 2));
      const dataFormata = item.data;
      const dataDoDia = dayjs(new Date()).format("YYYY-MM-DD");

      console.log(dataFormata, "dayjs: ", dataDoDia);
      if (dataFormata != dataDoDia) {
        return;
      }

      if (horaformada >= 9 && horaformada < 12) {
        const manha = document.querySelector(".matutino");
        manha.append(card);
      } else if (horaformada >= 12 && horaformada < 17) {
        const tarde = document.querySelector(".vespertino");
        tarde.append(card);
      } else {
        const noite = document.querySelector(".noturno");
        noite.append(card);
      }
    }
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", error.message);
  }
}
