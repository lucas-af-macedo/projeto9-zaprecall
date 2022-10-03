import React from 'react';
import Inicio from './Inicio';
import TelaZap from './TelaZap';
import deck from './dados';
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
            alert('venceu')
        }else{
            setMostrarJanelaMeta(true)
            setMostrarVitoria(false)
            alert('perdeu')
        }
    }
    const [dados,setDados] = React.useState([])
    const [listaRespostas,setListaRespostas] = React.useState([])
    const [telaInicial,setTelaInicial] = React.useState(true);
    const [metaMinima,setMetaMinima] = React.useState(1)
    const [mostrarJanelaMeta,setMostrarJanelaMeta] = React.useState(false)
    const [mostrarVitoria,setMostrarVitoria] = React.useState(false)
    return(
        <>
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
        </>
    )
}