import react from 'react'
import logo from '../assets/img/logo.png'
import MetaZap from './MetaZap'
import SelecionarDeck from './SelecionarDeck'
import styled from "styled-components";


export default function Inicio(props){
    function sairTelaInicio() {
        props.setDados(props.deck.find((f)=>pesquisa===f.nome).deck)
        setBotaoAtivo(true)
        setMeta(true)
        
    }
    function valor(e){
        setPesquisa(e.target.value)
        setBotaoAtivo(false)
    }
    const [pesquisa,setPesquisa] = react.useState(props.deck[0].nome)
    const [botaoAtivo,setBotaoAtivo] = react.useState(true)
    const [meta,setMeta] = react.useState(false)
    return(
        <TelaInicio>
            <img src={logo} alt='oi'/>
            <h1>ZapRecall</h1>
            {meta 
            ? <MetaZap
                setListaRespostas = {props.setListaRespostas}
                criarLista = {props.criarLista}
                setMetaMinima = {props.setMetaMinima}
                setTelaInicial = {props.setTelaInicial}
                listaRespostas = {props.listaRespostas}
                valor = {valor}
                dados = {props.dados}
                deck = {props.deck}
                sairTelaInicio = {sairTelaInicio}
                setBotaoAtivo = {setBotaoAtivo}
                botaoAtivo = {botaoAtivo} /> 
            : <SelecionarDeck
                valor = {valor}
                deck = {props.deck}
                sairTelaInicio = {sairTelaInicio}
                botaoAtivo = {botaoAtivo} />}
        </TelaInicio>
    )
    }
const TelaInicio = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);

h1 {
  font-family: 'Righteous',cursive;
  font-size: 36px;
  color: white;
  margin: 30px;
  font-weight: 500;
}


  `