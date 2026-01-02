export async function verificaDataAgendamento() {
  const dataSelecionada = document.getElementById("calendarInput");
  console.log(dataSelecionada.value);
  dataSelecionada.addEventListener("change", (e) => {
    return e.target.value;
  });
}
