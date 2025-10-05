import dayjs  from "dayjs";

export default function criarID (){
    const data = dayjs().format('YYYYMMDDHHmmssSSS')
    const id = Math.random().toString(10)
    return `${data}${id}`
}

console.log (criarID())