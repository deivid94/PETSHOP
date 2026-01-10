export async function getAgendamentos(URL) {
  try {
    const response = await fetch(`${URL}/agendamentos`);
    console.log(response);
    if (!response.ok) {
      throw new Error('erro na requisicao' + response.status);
    }
    const dadosAgendamentos = await response.json();
    return dadosAgendamentos;
  } catch (error) {
    console.error('Erro na busca de agendamentos', error);
    throw error;
  }
}
