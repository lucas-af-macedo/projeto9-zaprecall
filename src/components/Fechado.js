
export default function Fechado(props){
    function abrir(){
        props.setFechado(false)
    }
    return(
        <div className="flashcard " onClick={abrir} >
            flashcard {props.dadosFlashCard.id+1}
        </div>
    )
}