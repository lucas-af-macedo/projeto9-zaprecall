let quantidadeMeta
export default function MetaZap(props){
    function sairTelaInicio(){
        props.setMetaMinima(quantidadeMeta)
        props.setTelaInicial(false)
        props.setListaRespostas(props.criarLista())
    }
    function valor(e){
        let valorAtual = e.target.value
        if(props.dados.length > valorAtual && valorAtual > 0){
            props.setBotaoAtivo(false)
            quantidadeMeta=valorAtual
    }
    }
    return(
    <>
        <input type='number' placeholder="Escolha sua meta de zaps..."  onChange={e => valor(e)}/>
        <button onClick={sairTelaInicio} disabled= {props.botaoAtivo}>Iniciar Recall!</button>
    </>
    )
}