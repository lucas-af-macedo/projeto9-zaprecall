import styled from 'styled-components'
import sad from '../assets/img/sad.png'
export default function Derrota(props){
    return(
        <DerrotaDiv>
            <div>
                <p>Putz</p>
                <img src={sad}/>
            </div>
        </DerrotaDiv>
    )
}
const DerrotaDiv = styled.div`
    z-index: 100;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7) ;
    display: flex;
    align-items: center;
    justify-content: center;
div{
    background-color: white;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
}
img{
    margin-left: 5px;
}
`