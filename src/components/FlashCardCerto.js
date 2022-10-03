import styled from 'styled-components'
import zap from '../assets/img/icone_certo.png'
export default function FlashCardCerto(props){
    return(
        <FlashCard data-identifier="flashcard">
        <p data-identifier="flashcard-index-item">Pergunta {props.id+1}</p>
        <div>
            <img src={zap} data-identifier="flashcard-status"/>
        </div>
        </FlashCard>
    )
}

const FlashCard = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    margin: 25px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive';
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    color: #2FBE34;
    text-decoration: line-through;
`