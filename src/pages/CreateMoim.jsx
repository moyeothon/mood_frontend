import React, { useState } from 'react'
import { PageContainer } from '../components/Layout'
import Header from '../components/Header'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Question = styled.div`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 15px;
`
const ButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;  
  flex-wrap: wrap;
`
const Option = styled.button`
  height: 36px;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin: 5px 10px 0px 0px;
  flex-basis: auto;

  &:hover{
    background-color: ${({ theme }) => theme.mainColor};
    font-family: ${({ theme }) => theme.fonts.bold};
  }
`
const Divider = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,0.03);
  height: 1px;
  margin: 10px 0px;
`
const GoContainer = styled.div`
  width: 100%;
  height: 96px;
  box-shadow: 0px -2px 6px rgba(0,0,0,0.04);
  align-items: center;
  display: flex;
  justify-content: center;
`
const GoButton = styled.button`
  width: 80%;
  height: 45px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family:  ${({ theme }) => theme.fonts.extrabold};
  cursor: pointer;
`
const CreateMoim = ()  => {
  const [selectedInfo, setSelectedInfo] = useState([]);
  const navigate = useNavigate();

  const question = [
    '누구와 만나는 자리인가요?',
    '얼마나 친하신가요?',
    '몇 명이 참석하나요?',
    '어떤 분위기를 원하시나요?',
    '평균 연령대가 어떻게 되나요?',
    '공통 관심사는 무엇인가요?'
  ]
  const moimOption = {
    host : [ '친구', '가족', '동료', '동호회', '미팅 및 네트워킹'],
    relationshipType : [ '완전 어색', '어색', '보통', '친함', '완전 친함'],
    peopleCount : ['2명', '5명 이하', '10명 이하', '10명 이상'],
    vibe : ['차분한', '보통', '활발한'],
    averageAge :['10대', '20대', '30대', '40대'],
    commonInterests : ['🎬 영화', '️🏸 스포츠', '🏋🏻‍♂️ 헬스', '🫕 요리', '📚 독서', '💻 개발', ' ️건강', '🎧 음악', '🧩 게임']
  };

  const handleMoimInfo = (moimInfo, content) => {
    
    setSelectedInfo(prevState=> ({
      ...prevState,
      [moimInfo]: content
    }))
    // console.log(selectedInfo);

  };

  const handleMakeMoim = (selectedInfo) => {
    // console.log(selectedInfo);
    
    navigate('/topicresult', {
      state:{
        host: `${selectedInfo.host}`,
        relationshipType: `${selectedInfo.relationshipType}`,
        peopleCount: `${selectedInfo.peopleCount}`,
        vibe: `${selectedInfo.vibe}`,
        averageAge: `${selectedInfo.averageAge}`,
        commonInterests: `${selectedInfo.commonInterests}`
      }
    })
  }

  return (
    <>
      <Header />
      <PageContainer>
        {Object.keys(moimOption).map((option, index) => (
          <>
          <Question>{question[index]}</Question>
            <ButtonContainer>
              {moimOption[option].map((info)=> (                
                  <Option
                    key={info}
                    onClick={()=> handleMoimInfo(option, info)}
                    style={{
                      backgroundColor: selectedInfo[option] === info ? '#A5E5FF' : '#F2F2F2',
                    }}
                  >
                    {info}
                  </Option>
                ))}
              </ButtonContainer>
              <Divider />
              </>
            ))}
      </PageContainer>
      <GoContainer>
            <GoButton onClick={()=>handleMakeMoim(selectedInfo)}>
              MOOD 구하러 가기 🔥
            </GoButton>
        </GoContainer> 
    </>
  );
}

export default CreateMoim;