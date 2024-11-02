import React, { useEffect, useState } from "react";
import { PageContainer } from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import ForwardArrow from "../assets/images/ForwardArrow.png";
import First from "../assets/images/1.png";
import Second from "../assets/images/2.png";
import Third from "../assets/images/3.png";
import { useParams } from "react-router-dom";
import { getMoim } from "../api/makeMoim"; // 새로운 GET 요청 함수

const Title = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px 30px 0px;
`;

const ContainerContainer = styled.div`
  position: absolute;
  top: 130%;
`;
const Container = styled.div`
  width: 110%;
  height: 50%;
  padding: 19px 23px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Divider = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  height: 1px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
`;

const Topic = styled.div`
  width: 85%;
  margin: 0px 5px;
  font-size: 15px;
  flex-wrap: wrap;
  line-height: 1.5;
`;

const ArrowImg = styled.img`
  width: 3%;
`;

const RankImg = styled.img`
  margin-right: 5px;
  width: 8%;
`;

function PastMoim() {
  const { id } = useParams(); // URL에서 ID 추출
  const [topicData, setTopicData] = useState();
  const [activityData, setActivityData] = useState();
  const ImgNumber = [First, Second, Third];
  const [isLoading, setIsLoading] = useState(true);

  const fetchMoimData = async () => {
    setIsLoading(true);
    try {
      const response = await getMoim(id); // GET 요청으로 모임 데이터 가져오기
      if (response) {
        setTopicData(
          response.data.conversationTopicInfoResDtos
            .conversationTopicInfoResDtos
        );
        setActivityData(
          response.data.suggestedActivityInfoResDtos
            .suggestedActivityInfoResDtos
        );
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMoimData();
  }, []);
  return (
    <>
      <Header />
      <PageContainer>
        <Title>무드가 여러분들을의 소중한 추억을 가져왔어요</Title>
        <ContainerContainer>
          <Container>
            <SubTitle>무드의 추천 대화 주제</SubTitle>
            {topicData &&
              topicData.map((item, index) => {
                return (
                  <div key={item.topic}>
                    <ContentContainer>
                      <RankImg src={ImgNumber[index]} />
                      <Topic>{item.topic}</Topic>
                      <ArrowImg src={ForwardArrow} />
                    </ContentContainer>
                    <Divider />
                  </div>
                );
              })}
          </Container>

          <Container>
            <SubTitle>무드의 추천 활동</SubTitle>
            {activityData &&
              activityData.map((item, index) => {
                return (
                  <div key={item.activity}>
                    <ContentContainer>
                      <RankImg src={ImgNumber[index]} />
                      <Topic>{item.activity}</Topic>
                      <ArrowImg src={ForwardArrow} />
                    </ContentContainer>
                    <Divider />
                  </div>
                );
              })}
          </Container>
        </ContainerContainer>
      </PageContainer>
    </>
  );
}

export default PastMoim;
