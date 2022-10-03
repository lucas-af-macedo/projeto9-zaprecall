import play from '../assets/img/seta_play.png'
export default function Fechado(props){
    function abrir(){
        props.setFechado(false)
    }
    return(
        <div className="flashcard ">
            flashcard {props.dadosFlashCard.id+1}
            <div>
                <img onClick={abrir} src={play}/>
            </div>
        </div>
    )
}