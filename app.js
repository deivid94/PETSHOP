"use strict";
import "./src/css/style.css";
import ListarTodosAgendamentos from "./src/modules/ListasTodosAgendamentos.js";
import { getAgendamentos }from "./src/services/FetchAgendamentos.js";
import { URL } from './src/services/config.js'

// ListarTodosAgendamentos(URL);
getAgendamentos();
