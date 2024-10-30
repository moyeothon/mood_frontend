import React, { Suspense } from "react";
import RouteSetting from "./utils/route/Route";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    
`;

const Content = styled.div`
    width: 100%;
    max-width: 375px;
    min-height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    font-family: ${({theme}) => theme.fonts.regular};
    `

function App() {
  return (
    <>
    <AppContainer>
      <Content>
        <Suspense fallback={<div />}>
          <RouteSetting />
        </Suspense>
        </Content>
      </AppContainer>
    </>
  );
}
export default App;
