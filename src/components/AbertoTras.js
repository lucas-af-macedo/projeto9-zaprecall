import setinha from '../assets/img/setinha.png'
export default function AbertoTras(props){
    return(
        <div className="flashcard aberto resposta">
            flashcard {props.resposta}
            <div>

            <button className='button error'>Não lembrei</button>
            <button className='button almost'>quase não lembrei</button>
            <button className='button zap'>Zap!</button>
            </div>
        </div>
    )
}