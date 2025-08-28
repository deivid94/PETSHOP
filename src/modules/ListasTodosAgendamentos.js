import { agendamentos } from '../../data.json'

export default function ListarTodosAgendamentos({agendamentos} ){
    try {
        for (agendamento in agendamentos) {
            console.log (agendamento)
        }
    } catch {

    }
}