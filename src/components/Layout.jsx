import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const PageContainer = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

// 홈화면 배경 (그라데이션) 설정
export const HomeContainer = styled.div`
  background: linear-gradient(
    180deg,
    #e5f8ff 0%,
    #a5e5ff 49%,
    ${(props) => props.theme.mainColor} 100%
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
