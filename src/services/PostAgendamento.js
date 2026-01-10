//import { URL } from "../services/config.js";

const API_URL = 'http://localhost:3333/agendamentos';

export async function postAgendamento(dados) {
  //console.log("postAgendamento - dados:", dados);
  if (dados === null || typeof dados !== 'object') {
    //throw new Error("dados is null or not an object");
    console.error('dados is null or not an object');
  }

  try {
    console.log('postAgendamento - trying to post to', `${API_URL}`);
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    console.error('postAgendamento - response:', response);

    if (!response.ok) {
      throw new Error(`Error ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('postAgendamento - error:', error);
    throw error('erro ao cadastrar agendamento' + error.message);
  }
}
