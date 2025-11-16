export function verificaDataAgendamento() {
  const dataSelecionaNoCalendarioAgendamento = document.getElementById(
    "datasDosAGendamentosParaMostrar"
  );

  dataSelecionaNoCalendarioAgendamento.addEventListener("change", (e) => {
    const dataSelecionada = e.target.value;
    
    return dataSelecionada
  });
}




