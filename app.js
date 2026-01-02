"use strict";
import "./src/css/style.css";
import { ListarTodosAgendamentos } from "./src/modules/ListasTodosAgendamentos.js";
import { realizarAgendamento } from "./src/modules/RealizarAgendamento.js";
import { verificaDataAgendamento } from "./src/modules/verificaDataAgendamento.js";

//REALIZAR AGENDAMENTO
document.addEventListener("DOMContentLoaded", function () {
  ListarTodosAgendamentos();
  realizarAgendamento();
  verificaDataAgendamento();
});

const modal = document.getElementById("appointmentModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Abrir Modal
openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// Fechar Modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Fechar clicando fora do modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
