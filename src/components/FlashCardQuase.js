import almost from '../assets/img/icone_quase.png'
export default function FlashCardQuase(props){
    return(
        <div className="flashcard help">
        flashcard {props.id+1}
        <div>
            <img src={almost}/>
        </div>
        </div>
    )
}