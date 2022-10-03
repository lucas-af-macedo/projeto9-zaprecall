import React from 'react';
import Inicio from './Inicio';
import TelaZap from './TelaZap';
import dados from './dados';
export default function App(props){
    function criarLista(){
        let lista = []
        dados.map(()=>lista.push(''))
        return (lista)
        
    }
    const [listaRespostas,setListaRespostas] = React.useState([])
    const [telaInicial,setTelaInicial] = React.useState(true);
    return(
        <>
            {telaInicial ? <Inicio 
            logo = {props.logo} 
            setTelaInicial= {setTelaInicial}
            setListaRespostas = {setListaRespostas}
            criarLista = {criarLista}
            dados = {dados} /> : 
            <TelaZap 
            logo = {props.logo}
            dados= {dados}
            listaRespostas = {listaRespostas}
            setListaRespostas = {setListaRespostas} />}
        </>
    )
}