export async function getAgendamentos(URL) {
  await fetch(`${URL}/agendamentos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("erro na requisicao" + response.status);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      return data
    });
}
