import setinha from '../assets/img/setinha.png'
export default function AbertoFrente(props){
    function girar(){
        props.setFrente(false)
    }
    return(
        <div className="flashcard aberto">
            flashcard {props.questao}
            <div>
                <img onClick={girar} src={setinha}/>
            </div>
        </div>
    )
}