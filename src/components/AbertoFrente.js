import styled from 'styled-components'
import setinha from '../assets/img/setinha.png'
export default function AbertoFrente(props){
    function girar(){
        props.setFrente(false)
    }
    return(
        <FlashCard data-identifier="flashcard">
            <p data-identifier="flashcard-question">{props.questao}</p>
            <div>
                <img onClick={girar} src={setinha} data-identifier="flashcard-turn-btn"/>
            </div>
        </FlashCard>
    )
}

const FlashCard = styled.div`
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
  justify-content: flex-end;
}
img {
  cursor: pointer;
}
`