import React from "react";
import { HomeContainer } from "../components/Layout";
import styled from "styled-components";
import SpeechBalloons from "../assets/images/SpeechBalloons.png";

const SpeechBalloons1Img = styled.img`
  position: absolute;
  height: auto;
  width: 60%;
  object-fit: contain;
  left: 53%;
  bottom: 80%;
`;
const SpeechBalloons2Img = styled.img`
  position: absolute;
  height: auto;
  width: 60%;
  object-fit: contain;
  left: -15%;
  bottom: 33%;
  transform: scale(-1, 1);
`;
const HomeBigPhraseDiv = styled.div`
  position: absolute;
  left: 5%;
  top: 10%;
  font-size: 1.6rem;
  font-weight: 900;
  /* letter-spacing: -0.06em; */
`;
const HomeSmallPhraseDiv = styled.div`
  position: absolute;
  left: 6%;
  top: 17.9%;
`;
const HomeHotTopicDiv = styled.div`
  position: absolute;
  top: 25%;
  border-radius: 10px;
  width: calc(100% - 12%);
  height: 30%;
  background-color: white;
  z-index: 1;
  margin-left: 6%; /* 좌측 여백 */
  margin-right: 6%; /* 우측 여백 */
`;
const HomeRecentMeetingDiv = styled.div`
  position: absolute;
  top: 57%;
  border-radius: 10px;
  width: calc(100% - 41%);
  height: 10%;
  background-color: white;
  z-index: 1;
  margin-left: 6%; /* 좌측 여백 */
  margin-right: 35%; /* 우측 여백 */
`;
const HomeReviewDiv = styled.div`
  position: absolute;
  top: 57%;
  border-radius: 10px;
  width: calc(100% - 74%);
  height: 10%;
  background-color: white;
  z-index: 1;
  margin-left: 68%; /* 좌측 여백 */
  margin-right: 6%; /* 우측 여백 */
`;
const HomeStartDiv = styled.div`
  position: absolute;
  top: 69%;
  border-radius: 10px;
  width: calc(100% - 12%);
  height: 11%;
  background-color: white;
  z-index: 1;
  margin-left: 6%; /* 좌측 여백 */
  margin-right: 6%; /* 우측 여백 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  background-color: ${(props) => props.theme.blueColor};
`;
function Home() {
  return (
    <>
      <HomeContainer>
        <SpeechBalloons1Img src={SpeechBalloons} alt="홈_배경_말풍선" />
        <SpeechBalloons2Img src={SpeechBalloons} alt="홈_배경_말풍선" />
        <HomeBigPhraseDiv>
          분위기 메이커? <br />
          이제 구해줘 무드가 책임진다!
        </HomeBigPhraseDiv>
        <HomeSmallPhraseDiv>
          분위기 어색할 틈 없이
          <br />
          AI가 대화 주제부터 꿀잼 활동까지 풀세팅!
        </HomeSmallPhraseDiv>
        <HomeHotTopicDiv></HomeHotTopicDiv>
        <HomeRecentMeetingDiv></HomeRecentMeetingDiv>
        <HomeReviewDiv></HomeReviewDiv>
        <HomeStartDiv>시작하기</HomeStartDiv>
      </HomeContainer>
    </>
  );
}

export default Home;
