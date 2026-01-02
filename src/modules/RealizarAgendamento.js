import { postAgendamento } from "../services/PostAgendamento.js";
import criarID from "./CriarID.js";

export function realizarAgendamento() {
  const form = document.getElementById("formAgendamento");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeDoTutor = document.getElementById("nomeDoTutor")?.value;
    nomeDoTutor.replace(/[^a-zA-Z ]/g, "");

    const nomeDoPet = document.getElementById("nomeDoPet")?.value;
    nomeDoPet.replace(/[^a-zA-Z ]/g, "");

    const telefoneDotutor = document.getElementById("telefoneDoTutor")?.value;
    telefoneDotutor.replace(/[^0-9]/g, "");

    const descricaoDoServico =
      document.getElementById("descricaoDoServico")?.value;

    const dataDoAgendamento =
      document.getElementById("dataDoAgendamento")?.value;

    const horaDoAgendamento =
      document.getElementById("horaDoAgendamento")?.value;

    const id = criarID();

    if (
      !dataDoAgendamento ||
      !horaDoAgendamento ||
      !nomeDoTutor ||
      !nomeDoPet ||
      !telefoneDotutor ||
      !descricaoDoServico
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const dados = {
      id,
      nomeDoTutor,
      nomeDoPet,
      telefoneDotutor,
      descricaoDoServico,
      dataDoAgendamento,
      horaDoAgendamento,
    };

    try {
      postAgendamento(dados);
      if (!Response.ok) {
        return;
      }
      console.log("Agendamento realizado com sucesso!" + Response.message);
    } catch (error) {
      console.log(error.message);
    }

    window.location.reload;
  });
}
