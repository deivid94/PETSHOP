import { URL } from '../services/config.js'

export async function deleteAgendamento(id) {
    try {
        const response = await fetch(`${URL}/agendamentos/${id}`)
        if (!response.ok ){
            
        }
    }catch (e) {
        
    }
}