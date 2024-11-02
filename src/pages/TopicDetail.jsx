import React from 'react'
import { PageContainer } from '../components/Layout'
import Header from '../components/Header'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import TopicDetailCard from '../assets/images/TopicDetailCard.png'

const DetailCardWrapper = styled.div`
  width: 335px;
  height: 651px;
  position: relative;
  background-image: url(${TopicDetailCard});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopicTitle = styled.div`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
  margin-top: 81px;
  text-align: center;
  padding: 0 20px;
  word-break: keep-all;
`

const DescriptionBox = styled.div`
  width: 299px;
  height: 416px;
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`

const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: keep-all;
`

function TopicDetail() {
  const location = useLocation();
  const { title, description } = location.state || {};

  return (
    <>
      <Header />
      <PageContainer>
        <DetailCardWrapper>
          <TopicTitle>{title}</TopicTitle>
          <DescriptionBox>
            <Description>{description}</Description>
          </DescriptionBox>
        </DetailCardWrapper>
      </PageContainer>
    </>
  )
}

export default TopicDetail