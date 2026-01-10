

export async function verificaDataAgendamento() {
  const dataSelecionada = document.getElementById("calendarInput");
  dataSelecionada.addEventListener("change", (e) => {
    const eventoMudancaData = new CustomEvent("dataMudou", {
      detail: e.target.value,
      
    });
    window.dispatchEvent(eventoMudancaData);
  });
}
