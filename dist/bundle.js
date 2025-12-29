/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _src_modules_ListasTodosAgendamentos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modules/ListasTodosAgendamentos.js */ \"./src/modules/ListasTodosAgendamentos.js\");\n/* harmony import */ var _src_modules_RealizarAgendamento_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modules/RealizarAgendamento.js */ \"./src/modules/RealizarAgendamento.js\");\n/* harmony import */ var _src_modules_verificaDataAgendamentos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/modules/verificaDataAgendamentos.js */ \"./src/modules/verificaDataAgendamentos.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n\n\n\n\n\n\n\n//import { postAgendamento } from \"./src/services/PostAgendamento.js\";\n\nfunction definirDataAtualNoInput() {\n  try {\n    const inputData = document.getElementById(\"datasDosAGendamentosParaMostrar\");\n    if (!inputData) {\n      console.warn(\"problemas para selecionar a data\");\n      return;\n    }\n    const dataAtualFormatada = dayjs__WEBPACK_IMPORTED_MODULE_4__().format(\"YYYY-MM-DD\");\n    inputData.value = dataAtualFormatada;\n  } catch (error) {\n    console.log(`${error} data nao carregada`);\n  }\n}\n\n//REALIZAR AGENDAMENTO\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  definirDataAtualNoInput();\n  (0,_src_modules_ListasTodosAgendamentos_js__WEBPACK_IMPORTED_MODULE_1__.ListarTodosAgendamentos)();\n  (0,_src_modules_RealizarAgendamento_js__WEBPACK_IMPORTED_MODULE_2__.realizarAgendamento)();\n  (0,_src_modules_verificaDataAgendamentos_js__WEBPACK_IMPORTED_MODULE_3__.verificaDataAgendamento)();\n  // postAgendamento()\n});\n\n//# sourceURL=webpack://petshop/./app.js?\n}");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("{!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=\"$isDayjsObject\",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return b.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return b.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return b.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return b.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return b.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return b.s(e.$s,2,\"0\");case\"SSS\":return b.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));\n\n//# sourceURL=webpack://petshop/./node_modules/dayjs/dayjs.min.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://petshop/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/modules/CriarID.js":
/*!********************************!*\
  !*** ./src/modules/CriarID.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ criarID)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n\nfunction criarID() {\n  const data = dayjs__WEBPACK_IMPORTED_MODULE_0__().format(\"YYYYMMDDHH\");\n  const id = Math.random().toString(10);\n  return `${data}${id}`;\n}\n\n//# sourceURL=webpack://petshop/./src/modules/CriarID.js?\n}");

/***/ }),

/***/ "./src/modules/ListasTodosAgendamentos.js":
/*!************************************************!*\
  !*** ./src/modules/ListasTodosAgendamentos.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListarTodosAgendamentos: () => (/* binding */ ListarTodosAgendamentos)\n/* harmony export */ });\n/* harmony import */ var _services_FetchAgendamentos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/FetchAgendamentos.js */ \"./src/services/FetchAgendamentos.js\");\n/* harmony import */ var _services_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.js */ \"./src/services/config.js\");\n/* harmony import */ var _services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/criarElementoHtml.js */ \"./src/services/criarElementoHtml.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n\n\n\n\n\nasync function ListarTodosAgendamentos() {\n  try {\n    const dataSelecionada = await (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (!dataSelecionada) {\n      console.log(\"Nenhuma data selecionada para filtrar\");\n      return;\n    }\n    const listaDeAgendamentos = await (0,_services_FetchAgendamentos_js__WEBPACK_IMPORTED_MODULE_0__.getAgendamentos)(`${_services_config_js__WEBPACK_IMPORTED_MODULE_1__.URL}`);\n    (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", \"matutino\");\n    (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", \"vespertino\");\n    (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", \"noturno\");\n    for (let item of listaDeAgendamentos) {\n      const card = document.createElement(\"div\");\n      card.classList.add(\"card\");\n      const data = (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", \"data\", item.data);\n      const hora = (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", \"hora\", item.hora);\n      const pet = (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", \"pet\", item.nomePet);\n      const tutor = (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", \"tutor\", item.nome);\n      const servico = (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\", \"servico\", item.servico);\n      const botaoDelete = (0,_services_criarElementoHtml_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"a\", \"link\", \"remover agendamento\");\n      card.append(data, hora, pet, tutor, servico, botaoDelete);\n      const horaformada = parseInt(item.hora.slice(0, 2));\n      const dataFormata = item.data;\n      const dataDoDia = dayjs__WEBPACK_IMPORTED_MODULE_3__(new Date()).format(\"YYYY-MM-DD\");\n      console.log(dataFormata, \"dayjs: \", dataDoDia);\n      if (dataFormata != dataDoDia) {\n        return;\n      }\n      if (horaformada >= 9 && horaformada < 12) {\n        const manha = document.querySelector(\".matutino\");\n        manha.append(card);\n      } else if (horaformada >= 12 && horaformada < 17) {\n        const tarde = document.querySelector(\".vespertino\");\n        tarde.append(card);\n      } else {\n        const noite = document.querySelector(\".noturno\");\n        noite.append(card);\n      }\n    }\n  } catch (error) {\n    console.error(\"nao foi possivel listar agendamentos\", error.message);\n  }\n}\n\n//# sourceURL=webpack://petshop/./src/modules/ListasTodosAgendamentos.js?\n}");

/***/ }),

/***/ "./src/modules/RealizarAgendamento.js":
/*!********************************************!*\
  !*** ./src/modules/RealizarAgendamento.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   realizarAgendamento: () => (/* binding */ realizarAgendamento)\n/* harmony export */ });\n/* harmony import */ var _services_PostAgendamento_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/PostAgendamento.js */ \"./src/services/PostAgendamento.js\");\n/* harmony import */ var _CriarID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CriarID.js */ \"./src/modules/CriarID.js\");\n\n\nfunction realizarAgendamento() {\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    const form = document.getElementById(\"agendar\");\n    form.addEventListener(\"submit\", e => {\n      e.preventDefault();\n      const id = (0,_CriarID_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      const data = document.getElementById(\"dateAgendamento\")?.value;\n      const hora = document.getElementById(\"hora\")?.value;\n      const nome = document.getElementById(\"tutor\")?.value;\n      const nomePet = document.getElementById(\"nomePet\")?.value;\n      const telefone = document.getElementById(\"telefone\")?.value;\n      const observacao = document.getElementById(\"observacao\")?.value;\n      const servico = document.getElementById(\"servico\")?.value;\n      const dados = {\n        id,\n        data,\n        hora,\n        nome,\n        nomePet,\n        telefone,\n        observacao,\n        servico\n      };\n      (0,_services_PostAgendamento_js__WEBPACK_IMPORTED_MODULE_0__.postAgendamento)(dados);\n      window.location.reload();\n    });\n  });\n}\n\n//# sourceURL=webpack://petshop/./src/modules/RealizarAgendamento.js?\n}");

/***/ }),

/***/ "./src/modules/verificaDataAgendamentos.js":
/*!*************************************************!*\
  !*** ./src/modules/verificaDataAgendamentos.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   verificaDataAgendamento: () => (/* binding */ verificaDataAgendamento)\n/* harmony export */ });\nfunction verificaDataAgendamento() {\n  const dataSelecionaNoCalendarioAgendamento = document.getElementById(\"datasDosAGendamentosParaMostrar\");\n  dataSelecionaNoCalendarioAgendamento.addEventListener(\"change\", e => {\n    const dataSelecionada = e.target.value;\n    return dataSelecionada;\n  });\n}\n\n//# sourceURL=webpack://petshop/./src/modules/verificaDataAgendamentos.js?\n}");

/***/ }),

/***/ "./src/services/FetchAgendamentos.js":
/*!*******************************************!*\
  !*** ./src/services/FetchAgendamentos.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAgendamentos: () => (/* binding */ getAgendamentos)\n/* harmony export */ });\nasync function getAgendamentos(URL) {\n  try {\n    const response = await fetch(`${URL}/agendamentos`);\n    if (!response.ok) {\n      throw new Error(\"erro na requisicao\" + response.status);\n    }\n    const dadosAgendamentos = await response.json();\n    return dadosAgendamentos;\n  } catch (error) {\n    console.error(\"Erro na busca de agendamentos\", error);\n    throw error;\n  }\n}\n\n//# sourceURL=webpack://petshop/./src/services/FetchAgendamentos.js?\n}");

/***/ }),

/***/ "./src/services/PostAgendamento.js":
/*!*****************************************!*\
  !*** ./src/services/PostAgendamento.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postAgendamento: () => (/* binding */ postAgendamento)\n/* harmony export */ });\n/* harmony import */ var _services_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config.js */ \"./src/services/config.js\");\n\nconsole.log(_services_config_js__WEBPACK_IMPORTED_MODULE_0__.URL);\nasync function postAgendamento(dados) {\n  console.log(\"postAgendamento - dados:\", dados);\n  if (dados === null || typeof dados !== \"object\") {\n    throw new Error(\"dados is null or not an object\");\n  }\n  try {\n    console.log(\"postAgendamento - trying to post to\", `${_services_config_js__WEBPACK_IMPORTED_MODULE_0__.URL}/agendamentos`);\n    const response = await fetch(`${_services_config_js__WEBPACK_IMPORTED_MODULE_0__.URL}/agendamentos`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(dados)\n    });\n    console.log(\"postAgendamento - response:\", response);\n    if (!response.ok) {\n      throw new Error(`Error ${response.status} - ${response.statusText}`);\n    }\n    return await response.json();\n  } catch (error) {\n    console.error(\"postAgendamento - error:\", error);\n    throw error(\"erro ao cadastrar agendamento\" + error.message);\n  }\n}\n\n//# sourceURL=webpack://petshop/./src/services/PostAgendamento.js?\n}");

/***/ }),

/***/ "./src/services/config.js":
/*!********************************!*\
  !*** ./src/services/config.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   URL: () => (/* binding */ URL)\n/* harmony export */ });\nconst URL = \"http://localhost:3333\";\n\n//# sourceURL=webpack://petshop/./src/services/config.js?\n}");

/***/ }),

/***/ "./src/services/criarElementoHtml.js":
/*!*******************************************!*\
  !*** ./src/services/criarElementoHtml.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ criarElementoHtml)\n/* harmony export */ });\nfunction criarElementoHtml(tag, classe, texto) {\n  const elemento = document.createElement(tag);\n  elemento.classList.add(classe);\n  elemento.textContent = texto;\n  return elemento;\n}\n\n//# sourceURL=webpack://petshop/./src/services/criarElementoHtml.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;