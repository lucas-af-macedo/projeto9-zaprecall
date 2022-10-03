import styled from "styled-components";
import FlashCard from "./FlashCard";
import Icones from "./Icones.js";
export default function TelaZap(props){
    function test(){
        console.log((props.listaRespostas.filter((f)=>f!=='')).length)
    }
    
    return(
    <>
    <Conteudo>
        <Header>
            <img src={props.logo} alt='oi'/>
            <p>ZapRecall</p>
        </Header>
        <Main>
            {props.dados.map((f) => <div key={f.id}><FlashCard 
            janelaMeta = {props.janelaMeta}
            metaMinima = {props.metaMinima}
            dados = {props.dados}
            dadosFlashCard={f}
            setListaRespostas = {props.setListaRespostas}
            listaRespostas = {props.listaRespostas} /></div> )}
        </Main>

    <Footer onClick={test}>
        <p>{props.listaRespostas.filter((f)=>f!=='').length}/{props.dados.length} CONCLUÍDOS</p>
        <div>
        {props.listaRespostas.filter((f)=>f!=='').map((f, index)=><Icones key={index}  statusResposta = {f}></Icones>)}
        </div>
    </Footer>
    </Conteudo>
    </>
)
}

const Conteudo = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `

const Header = styled.div`
    position: fixed;
    height: 100px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous" ;
    z-index: 1;
img {
  width: 52px;
  height: 60px;
}

p {
    margin-left: 10px;
}
  `
const Main = styled.div`
  padding-left: calc(50vw - 150px);
  padding-right:  calc(50vw - 150px);
  height: calc(100vh - 200px);
  overflow: hidden;
  overflow-y: scroll;
&::-webkit-scrollbar {
  display: none;
}
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  min-height: 50px;
  padding: 14px 10px;
  font-size: 18px;
  color: black;
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

div {
 display: flex;
 justify-content: center;
}

`