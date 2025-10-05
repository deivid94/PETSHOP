
import { postAgendamento } from "../services/PostAgendamento.js";
import criarID from "./CriarID.js";

export function realizarAgendamento() {
  document.addEventListener("DOMContentLoaded", () => {



    const form = document.getElementById("agendar");

    form.addEventListener("submit", (e) => {
      e.preventDefault();


      const id = criarID()
      const nome = document.getElementById("tutor")?.value;
      const nomePet = document.getElementById("nomePet")?.value;
      const telefone = document.getElementById("telefone")?.value;
      const observacao = document.getElementById("observacao")?.value;
      const servico = document.getElementById("servico")?.value;

      const dados = { id, nome, nomePet, telefone, observacao, servico };
      

      postAgendamento({ dados });
    });
  });
}
