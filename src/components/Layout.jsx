import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: ${(props) => props.theme.mainColor };
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const PageContainer = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  z-index: 1;
`;