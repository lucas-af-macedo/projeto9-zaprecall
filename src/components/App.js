import React from 'react';
import Inicio from './Inicio';
import TelaZap from './TelaZap';
import deck from './dados';
import styled from 'styled-components';
import Vitoria from './Vitoria';
import Derrota from './Derrota';
export default function App(props){
    function criarLista(){
        let lista = []
        dados.map(()=>lista.push(''))
        return (lista)
        
    }
    function janelaMeta(valor){
        if(valor){
            setMostrarJanelaMeta(true)
            setMostrarVitoria(true)
        }else{
            setMostrarJanelaMeta(true)
            setMostrarVitoria(false)
        }
    }
    const [dados,setDados] = React.useState([])
    const [listaRespostas,setListaRespostas] = React.useState([])
    const [telaInicial,setTelaInicial] = React.useState(true);
    const [metaMinima,setMetaMinima] = React.useState(1)
    const [mostrarJanelaMeta,setMostrarJanelaMeta] = React.useState(false)
    const [mostrarVitoria,setMostrarVitoria] = React.useState(false)
    return(
        <Tela>
            {mostrarJanelaMeta ? mostrarVitoria ? <Vitoria/> : <Derrota/> : null}
            {telaInicial ? <Inicio 
            logo = {props.logo} 
            setMetaMinima = {setMetaMinima}
            setTelaInicial= {setTelaInicial}
            setListaRespostas = {setListaRespostas}
            listaRespostas = {listaRespostas}
            criarLista = {criarLista}
            deck = {deck}
            dados = {dados}
            setDados = {setDados} /> 
            : 
            <TelaZap 
            janelaMeta = {janelaMeta}
            metaMinima = {metaMinima}
            logo = {props.logo}
            dados= {dados}
            listaRespostas = {listaRespostas}
            setListaRespostas = {setListaRespostas} />}
        </Tela>
    )
}
const Tela = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--preto);
  font-family: 'Recursive', sans-serif;
  background-color: #FB6B6B;
* {
  box-sizing: border-box;}
`