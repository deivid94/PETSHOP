import { URL } from "../services/config.js"; //EXCLUIR DEPOIS DE PRONTO

export async function getAgendamentos(URL) {
  await fetch(`${URL}/agendamentos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("erro na requisicao" + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}


