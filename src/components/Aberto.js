import react from "react"
import AbertoFrente from "./AbertoFrente"
import AbertoTras from "./AbertoTras"

export default function Aberto(props){
    const [frente,setFrente] = react.useState(true)
    return(
        <>
            {frente ? <AbertoFrente questao = {props.dadosFlashCard.questao} setFrente = {setFrente} /> : <AbertoTras resposta = {props.dadosFlashCard.resposta}/>}
        </>
    )
}