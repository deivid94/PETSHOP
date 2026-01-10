import { URL } from '../services/config.js';

export async function deleteAgendamento(id) {
  try {
    const response = await fetch(`${URL}/agendamentos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      console.error(`Error ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('deleteAgendamento - error:', error);
  }
}
