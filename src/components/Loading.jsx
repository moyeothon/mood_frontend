import styled from "styled-components"
import LoadingGif from '../assets/images/Loading.gif'

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoadingText = styled.div`
    font-family: ${({ theme }) => theme.fonts.regular};
`
const Loading = () => {
    return (
        <Background>
            <div>
                <img src={LoadingGif} alt="Animation" />
            </div>
            <LoadingText>모임에 꼭 맞는 주제들이 만들어지고 있어요!</LoadingText>
        </Background>
    )
}
export default Loading;