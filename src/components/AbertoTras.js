export default function AbertoTras(props){
    function error(){
        let lista = [...props.listaRespostas]
        lista[props.id] = 'error'
        props.setListaRespostas([...lista])
        props.setRespondido(true)
        props.setFechado(true)
    }
    function almost(){
        let lista = [...props.listaRespostas]
        lista[props.id] = 'almost'
        props.setListaRespostas([...lista])
        props.setRespondido(true)
        props.setFechado(true)
    }
    function zap(){
        let lista = [...props.listaRespostas]
        lista[props.id] = 'zap'
        props.setListaRespostas([...lista])
        props.setRespondido(true)
        props.setFechado(true)
    }
    return(
        <div className="flashcard aberto resposta">
            flashcard {props.resposta}
            <div>

            <button onClick={error} className='button error'>Não lembrei</button>
            <button onClick={almost} className='button almost'>quase não lembrei</button>
            <button onClick={zap} className='button zap'>Zap!</button>
            </div>
        </div>
    )
}