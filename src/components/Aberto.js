import react from "react"
import AbertoFrente from "./AbertoFrente"
import AbertoTras from "./AbertoTras"

export default function Aberto(props){
    const [frente,setFrente] = react.useState(true)
    return(
        <>
            {frente ? <AbertoFrente questao = {props.dadosFlashCard.questao} 
            setFrente = {setFrente} /> : 
            <AbertoTras resposta = {props.dadosFlashCard.resposta}
            janelaMeta = {props.janelaMeta}
            setRespondido = {props.setRespondido}
            setFechado={props.setFechado}
            metaMinima = {props.metaMinima}
            id = {props.dadosFlashCard.id}
            listaRespostas = {props.listaRespostas}
            setListaRespostas = {props.setListaRespostas} />}
        </>
    )
}