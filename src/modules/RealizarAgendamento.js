import { postAgendamento } from "../services/PostAgendamento.js";

export function realizarAgendamento() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("agendar");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("tutor")?.value;
      console.log(nome);
      const nomePet = document.getElementById("nomePet")?.value;
      const telefone = document.getElementById("telefone")?.value;
      const observacao = document.getElementById("observacao")?.value;
      const servico = document.getElementById("servico")?.value;

      const dados = { nome, nomePet, telefone, observacao, servico };
      console.log(dados);

      postAgendamento({ dados });
    });
  });
}
