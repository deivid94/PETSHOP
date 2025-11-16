"use strict";
import "./src/css/style.css";
import { ListarTodosAgendamentos } from "./src/modules/ListasTodosAgendamentos.js";
import { realizarAgendamento } from "./src/modules/RealizarAgendamento.js";
import { verificaDataAgendamento } from "./src/modules/verificaDataAgendamentos.js";

//REALIZAR AGENDAMENTO
document.addEventListener("DOMContentLoaded", function () {
  ListarTodosAgendamentos();
  realizarAgendamento();
  verificaDataAgendamento();


});
