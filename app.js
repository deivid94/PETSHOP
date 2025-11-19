"use strict";
import "./src/css/style.css";
import { ListarTodosAgendamentos } from "./src/modules/ListasTodosAgendamentos.js";
import { realizarAgendamento } from "./src/modules/RealizarAgendamento.js";
import { verificaDataAgendamento } from "./src/modules/verificaDataAgendamentos.js";
import dayjs from "dayjs";

function definirDataAtualNoInput() {
  try {
    const inputData = document.getElementById(
      "datasDosAGendamentosParaMostrar"
    );

    if (!inputData) {
      console.warn("problemas para selecionar a data");
      return;
    }

    const dataAtualFormatada = dayjs().format("YYYY-MM-DD");

    inputData.value = dataAtualFormatada;
  } catch (error) {
    console.log(`${error} data nao carregada`);
  }
}

//REALIZAR AGENDAMENTO
document.addEventListener("DOMContentLoaded", function () {
  definirDataAtualNoInput();
  ListarTodosAgendamentos();
  realizarAgendamento();
  verificaDataAgendamento();
});
