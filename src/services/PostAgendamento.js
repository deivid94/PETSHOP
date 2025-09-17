import URL from "../services/config.js";

console.log("nao buscou", URL);

export async function postAgendamento(dados) {
  console.log(dados);
  const response = await fetch(`${URL}/agendamentos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("erro ao cadastrar agendamento");
  }

  return await response.json();
}
