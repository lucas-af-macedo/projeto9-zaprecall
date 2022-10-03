import zap from '../assets/img/icone_certo.png'
export default function FlashCardCerto(props){
    return(
        <div className="flashcard acerto">
        flashcard {props.id+1}
        <div>
            <img src={zap}/>
        </div>
        </div>
    )
}