import react from "react"
import Aberto from "./Aberto"
import Fechado from "./Fechado"
import Respondido from "./Respondido"

export default function FlashCard(props){
    const [fechado,setFechado] = react.useState(true)
    const [respondido,setRespondido] = react.useState(false)
    return(
        <>
            {fechado ? respondido 
            ? <Respondido
            statusResposta = {props.listaRespostas[props.dadosFlashCard.id]} 
            id = {props.dadosFlashCard.id} /> 
            : <Fechado 
            dadosFlashCard={props.dadosFlashCard} 
            setFechado={setFechado}/> 
            : <Aberto 
            janelaMeta = {props.janelaMeta}
            metaMinima = {props.metaMinima}
            dadosFlashCard={props.dadosFlashCard} 
            setFechado={setFechado}
            setRespondido = {setRespondido}
            setListaRespostas = {props.setListaRespostas}
            listaRespostas = {props.listaRespostas}
             />}
        </>
    )
}