export default function SelecionarDeck(props){
    return(
    <>
        <select defaultValue={'Selecione um deck'} onChange={e => props.valor(e)}>
            <option disabled hidden>Selecione um deck</option>
            {props.deck.map((f,index)=> <option key={index} value={f.nome}>{f.nome}</option>)}
        </select>
        <button onClick={props.sairTelaInicio} disabled= {props.botaoAtivo}>Iniciar Recall!</button>
    </>
    )
}