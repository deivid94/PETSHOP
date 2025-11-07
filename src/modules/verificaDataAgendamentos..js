export function verificaDataAgendamento() {
  const dataSelecionaNoCalendarioAgendamento = document.getElementById(
    "calendarioDosAgendamentos"
  );

  dataSelecionaNoCalendarioAgendamento.addEventListener("change", (e) => {
    const dataSelecionada = e.target.value;
    console.log(dataSelecionada);
  });

  console.log(dataSelecionaNoCalendarioAgendamento);
}
