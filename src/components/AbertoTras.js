import styled from "styled-components"

export default function AbertoTras(props){
    function error(){
        let lista = [...props.listaRespostas]
        lista[props.id] = 'error'
        props.setListaRespostas([...lista])
        props.setRespondido(true)
        props.setFechado(true)
        console.log(props.listaRespostas.filter((f)=>f!=='').length)
        console.log(props.listaRespostas)
        if(props.listaRespostas.filter((f)=>f!=='').length===(props.listaRespostas.length)-1){
            if(lista.filter((f)=>f==='zap').length>=props.metaMinima){
                props.janelaMeta(1)
            } else{
                props.janelaMeta(0)
            }      
        }
    }
    function almost(){
        let lista = [...props.listaRespostas]
        lista[props.id] = 'almost'
        props.setListaRespostas([...lista])
        props.setRespondido(true)
        props.setFechado(true)
        console.log(props.listaRespostas.filter((f)=>f!=='').length)
        console.log(props.listaRespostas)
        if(props.listaRespostas.filter((f)=>f!=='').length===(props.listaRespostas.length)-1){
            if(lista.filter((f)=>f==='zap').length>=props.metaMinima){
                props.janelaMeta(1)
            } else{
                props.janelaMeta(0)
            }              
        }
    }
    function zap(){
        let lista = [...props.listaRespostas]
        lista[props.id] = 'zap'
        props.setListaRespostas([...lista])
        props.setRespondido(true)
        props.setFechado(true)
        console.log(props.listaRespostas.filter((f)=>f!=='').length)
        console.log(props.listaRespostas)
        if(props.listaRespostas.filter((f)=>f!=='').length===(props.listaRespostas.length)-1){
            if(lista.filter((f)=>f==='zap').length>=props.metaMinima){
                props.janelaMeta(1)
            } else{
                props.janelaMeta(0)
            }        
        }
    }
    return(
        <FlashCard data-identifier="flashcard">
            <p data-identifier="flashcard-answer">{props.resposta}</p>
            <div>

            <BotaoErro onClick={error} data-identifier="forgot-btn">Não lembrei</BotaoErro>
            <BotaoQuase onClick={almost} data-identifier="almost-forgot-btn">Quase não lembrei</BotaoQuase>
            <BotaoZap onClick={zap} data-identifier="zap-btn">Zap!</BotaoZap>
            </div>
        </FlashCard>
    )
}

const FlashCard = styled.div `
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  border-radius: 5px;
  margin: 25px 0px;
  font-family: 'Recursive', cursive;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  min-height: 130px;
  flex-direction: column;
  background-color: #FFFFD4;
  cursor: default;
  padding: 20px 10px;

div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

const BotaoZap = styled.button`
    width: 100%;
    height: 40px;
    margin: 3px;
    background-color: #2FBE34;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
 &:hover {
  filter: brightness(0.7)
}
`
const BotaoQuase = styled.button`
    width: 100%;
    height: 40px;
    margin: 3px;
    background-color: #FF922E;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
 &:hover {
  filter: brightness(0.7)
}
`
const BotaoErro = styled.button`
    width: 100%;
    height: 40px;
    margin: 3px;
    background-color: #FF3030;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
 &:hover {
  filter: brightness(0.7)
}
`


/* {
    box-sizing: border-box;
    --cor-fundo: #FB6B6B;
    --cor-fundo-card: #FFFFD4;
    --cor-nao-lembrei: #FF3030;
    --cor-quase-nao-lembrei: #FF922E;
    --cor-zap: #2FBE34;
    --preto: #333333;
  }*/