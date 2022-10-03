import error from '../assets/img/icone_erro.png'
export default function FlashCardErro(props){
    return(
        <div className="flashcard erro">
        flashcard {props.id+1}
        <div>
            <img src={error}/>
        </div>
        </div>
    )
}