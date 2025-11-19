import { getAgendamentos } from "../services/FetchAgendamentos.js";
import { URL } from "../services/config.js";
import criarElementoHtml from "../services/criarElementoHtml.js";
import verificaDataAgendamento from "../services/criarElementoHtml.js";
import dayjs from 'dayjs';
export async function ListarTodosAgendamentos() {
  try {


    const dataSelecionada = await verificaDataAgendamento();

    if (!dataSelecionada) {
      console.log("Nenhuma data selecionada para filtrar");
      return;
    }

    const listaDeAgendamentos = await getAgendamentos(`${URL}`);
    
    const card = document.querySelector(".card");
    const divmatutino = document.getElementsByClassName('matutino')
    const divespertino = document.getElementsByClassName('vespertino')
    const divnoturno = document.getElementsByClassName('noturno')

    for (let item of listaDeAgendamentos) {
      
      const data = criarElementoHtml("p", "data", item.data);
      const hora = criarElementoHtml("p", "hora", item.hora);
      const pet = criarElementoHtml("p", "pet", item.nomePet);
      const tutor = criarElementoHtml("p", "tutor", item.nome);
      const servico = criarElementoHtml("p", "servico", item.servico);

      card.append(data, hora, pet, tutor, servico);

      const dataformata = item.hora.slice(0,2)
      if (dataformata >= 6 && dataformata < 12){
        divmatutino.appendChild(card)
      } else if (dataformata >= 12 && dataformata < 18){
        divespertino.appendChild (card)
      } else  {
        divnoturno.appendChild(card)
      }
      
      
    }
  } catch (error) {
    console.error("nao foi possivel listar agendamentos", error);
  }
}
