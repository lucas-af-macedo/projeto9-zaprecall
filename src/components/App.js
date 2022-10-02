import React from 'react';
import Inicio from './Inicio';
import TelaZap from './TelaZap';
import dados from './dados';
export default function App(props){
    const [telaInicial,setTelaInicial] = React.useState(true);
    console.log(dados)
    return(
        <>
            {telaInicial ? <Inicio 
            logo = {props.logo} 
            setTelaInicial= {setTelaInicial}/> : 
            <TelaZap 
            logo = {props.logo}
            dados= {dados}/>}
        </>
    )
}