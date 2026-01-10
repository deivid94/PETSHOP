import { getAgendamentos } from '../services/FetchAgendamentos.js';
import { URL } from '../services/config.js';
//import criarElementoHtml from "../services/criarElementoHtml.js";
import { verificaDataAgendamento } from '../modules/verificaDataAgendamento.js';

export async function ListarTodosAgendamentos() {
  const todosAgendamentos = await getAgendamentos(`${URL}`);
  const diaDoCalendario = document.getElementById('dateDisplay');

  await verificaDataAgendamento();

  const atualizaragendamentosPorData = (dataParaBuscar) => {
    if (!diaDoCalendario) return;

    diaDoCalendario.textContent = dataParaBuscar;
    console.log(diaDoCalendario.textContent);
    const todosAgendamentosFiltrados = todosAgendamentos.filter(
      (item) => item.data === dataParaBuscar,
    );
    console.log(`tem agendamento aqui?` + todosAgendamentosFiltrados);

    if (todosAgendamentosFiltrados.length > 0) {
      console.log(
        'Encontrei esses agendamentos: ',
        +todosAgendamentosFiltrados,
      );
    } else {
      console.log('Nao encontrei agendamentos');
    }
  };

  window.addEventListener('dataMudou', (e) => {
    const novaData = e.detail;
    atualizaragendamentosPorData(novaData);

    if (!diaDoCalendario.textContent) {
      atualizaragendamentosPorData(diaDoCalendario.textContent);
    }
  });
}

// criarElementoHtml("div", "matutino");
//criarElementoHtml("div", "vespertino");
//("div", "noturno");

// for (let item of listaDeAgendamentos) {
//const card = document.createElement("div");
// card.classList.add("card");

// const data = criarElementoHtml("p", "data", item.data);
// const hora = criarElementoHtml("p", "hora", item.hora);
//const pet = criarElementoHtml("p", "pet", item.nomePet);
//const tutor = criarElementoHtml("p", "tutor", item.nome);
//const servico = criarElementoHtml("p", "servico", item.servico);
//const botaoDelete = criarElementoHtml("a", "link", "remover agendamento");

// card.append(data, hora, pet, tutor, servico, botaoDelete);

//const horaformada = parseInt(item.hora.slice(0, 2));
// const dataFormata = item.data;
// dataDoDia = dayjs(new Date()).format("YYYY-MM-DD");

//if (horaformada >= 9 && horaformada < 12) {
// const manha = document.querySelector(".matutino");
// manha.append(card);
// } else if (horaformada >= 12 && horaformada < 17) {
//  const tarde = document.querySelector(".vespertino");
//  tarde.append(card);
// } else {
//  const noite = document.querySelector(".noturno");
//  noite.append(card);
// }
//   }
