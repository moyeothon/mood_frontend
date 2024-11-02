import React from 'react'
import styled from 'styled-components'
import Warning from '../assets/images/Warning.gif'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 63%;
  max-width: 400px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const GoButton = styled.button`
  width: 90%;
  height: 45px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family:  ${({ theme }) => theme.fonts.extrabold};
  cursor: pointer;
  margin-bottom: 10px;
`
const WarningText = styled.div`
text-align: center;
  width: 100%;
  margin: 20px;
`
const WarningImg = styled.img`
  width: 18%;
`

const MakeTopicErrorModal=({onClose}) => {  
  
  return (
    <ModalOverlay  onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <WarningImg src={Warning}></WarningImg>
        <WarningText>문제가 발생했습니다.다시 시도해 주세요.</WarningText>
          <GoButton 
            onClick={onClose}>다시 시도하기</GoButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MakeTopicErrorModal;
