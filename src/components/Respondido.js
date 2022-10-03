import FlashCardErro from './FlashCardErro'
import FlashCardQuase from './FlashCardQuase'
import FlashCardCerto from './FlashCardCerto'
let teste1
let teste2
export default function Respondido(props){
    if (props.statusResposta==='error'){
        teste1 = true
        teste2 = false
    }else if (props.statusResposta==='almost'){
        teste1 = false
        teste2 = true
    }else{
        teste1 = false
        teste2 = false
    }
    return(
        <>
        {teste1 ? <FlashCardErro id = {props.id} /> : teste2 ? <FlashCardQuase id = {props.id}/> : <FlashCardCerto id = {props.id} />} 
        </>
    )
}