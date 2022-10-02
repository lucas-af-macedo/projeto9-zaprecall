import react from "react"
import Aberto from "./Aberto"
import Fechado from "./Fechado"

export default function FlashCard(props){
    const [fechado,setFechado] = react.useState(true)
    return(
        <>
            {fechado ? <Fechado dadosFlashCard={props.dadosFlashCard} setFechado={setFechado} /> : <Aberto dadosFlashCard={props.dadosFlashCard} setFechado={setFechado} />}
        </>
    )
}