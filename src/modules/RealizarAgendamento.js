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

    const dataDoagendamento =
      document.getElementById("dataDoagendamento")?.value;

    const horaDoAgendamento =
      document.getElementById("horaDoAgendamento")?.value;

    const id = criarID();

    if (
      !dataDoagendamento ||
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
      dataDoagendamento,
      horaDoAgendamento,
    };

    postAgendamento(dados);
    window.location.reload;
  });
}
