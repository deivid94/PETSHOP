import { URL } from "../services/config.js";

console.log(`${URL}/agendamentos`);

export async function postAgendamento(dados) {

  try {
    
  const response = await fetch(`${URL}/agendamentos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
    
  });

  return await response.json();
  } catch (error){
    
    throw new error ("erro ao cadastrar agendamento")
    
  }

  
}
