import react from 'react'
import styled from 'styled-components';
export default function SelecionarDeck(props){
    return(
    <>
        <Selecionar defaultValue={'Selecione um deck'} onChange={e => props.valor(e)}>
            <option disabled hidden>Selecione um deck</option>
            {props.deck.map((f,index)=> <option key={index} value={f.nome}>{f.nome}</option>)}
        </Selecionar>
        <Botao onClick={props.sairTelaInicio} disabled= {props.botaoAtivo}>Iniciar Recall!</Botao>
    </>
    )
}

const Selecionar = styled.select`
    width: 246px;
    height: 43px;
    border: 1px solid gray;
    outline: 0px;
    padding-left: 5px;
    border-radius: 5px;
    font-family: 'Roboto';
`

const Botao = styled.button`
  margin: 30px;
  width: 246px;
  height: 54px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  cursor: pointer;
  font-family: 'Recursive';
&:hover {
    background-color: #cea2a0;
  }
&:disabled{
    background-color: #E8E8E8;
    cursor: default;
    color: #C0C0C0;
}
`