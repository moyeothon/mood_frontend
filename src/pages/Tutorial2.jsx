import React from "react";
import { HomeContainer } from "../components/Layout";
import styled from "styled-components";
import Home_SpeechBalloons from "../assets/images/Home_SpeechBalloons.png";
import Home_QuestionMark_pink from "../assets/images/Home_QuestionMark_pink.png";
import Home_QuestionMark_blue from "../assets/images/Home_QuestionMark_blue.png";
import Home_Fire from "../assets/images/Home_Fire.png";
import { useNavigate } from "react-router-dom";
import Home_Moim from "../assets/images/Home_Moim.png";

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
const QuestionMarkPinkImg = styled.img`
  position: absolute;
  height: auto;
  width: 43%;
  object-fit: contain;
  left: 23%;
  top: 210%;
`;
const QuestionMarkPink2Img = styled.img`
  position: absolute;
  height: auto;
  width: 43%;
  object-fit: contain;
  right: -37%;
  top: 220%;
`;
const QuestionMarkBlueImg = styled.img`
  position: absolute;
  height: auto;
  width: 45%;
  object-fit: contain;
  right: -3%;
  top: 150%;
`;
const FireImg = styled.img`
  position: absolute;
  height: auto;
  width: 10%;
  right: 7%;
`;
const MoimImg = styled.img`
  position: absolute;
  left: -25%;
  top: 17%;
  width: 19%;
`;
const HomeBigPhraseDiv = styled.div`
  position: absolute;
  left: 7%;
  top: 10%;
  line-height: 1.25;
  font-size: 1.6rem;
  font-weight: 900;
  /* letter-spacing: -0.06em; */
`;
const HomeSmallPhraseDiv = styled.div`
  position: absolute;
  left: 8%;
  top: 17.9%;
  line-height: 1.5;
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
  cursor: pointer;
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
  cursor: pointer;
`;
const RecentMoimphraseDiv = styled.div`
  left: 25%;
  top: 27%;
  position: absolute;
  span {
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 900;
  }
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
  cursor: pointer;
  z-index: 1001;
  span {
    font-weight: 900;
    position: absolute;
    left: 19%;
    top: 40%;
  }
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
  cursor: pointer;
`;

const HotTopicPhraseDiv = styled.div`
  font-size: 1.6rem;
  font-weight: 900;
  position: absolute;

  left: 10%;
  top: 10%;
`;

const SmallHotTopicPhraseDiv = styled.div`
  position: absolute;
  line-height: 1.5;
  left: 11%;
  top: 25%;
`;
const DarkOverlay = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8); // 어두운 배경 색상 (투명도 0.7)
  z-index: 1000; // 가장 위에 나타나도록 설정
  span {
    font-size: large;
    position: absolute;
    top: 53%;
    left: 12%;
    color: white;
  }
`;
function Tutorial2() {
  const navigate = useNavigate(); // 네비게이트 훅 사용

  const handleTutorialClick = () => {
    navigate("/hottopic"); // 클릭 시 "/hottopic"으로 이동
  };
  const handleRecentMoimClick = () => {
    navigate("/recentmoim");
  };
  const handleCreateMoimClick = () => {
    navigate("/createmoim");
  };
  const handleReviewClick = () => {
    navigate("/tutorial3");
  };
  return (
    <>
      <HomeContainer>
        <DarkOverlay>
          <span>서비스에 대한 리뷰를 작성할 수 있어요.</span>
        </DarkOverlay>
        <SpeechBalloons1Img src={Home_SpeechBalloons} alt="홈_배경_말풍선" />
        <SpeechBalloons2Img src={Home_SpeechBalloons} alt="홈_배경_말풍선" />

        {/** 가장 상단에 글 Div */}
        <HomeBigPhraseDiv>
          분위기 메이커? <br />
          이제 구해줘 무드가 책임진다!
        </HomeBigPhraseDiv>
        <HomeSmallPhraseDiv>
          분위기 어색할 틈 없이
          <br />
          AI가 대화 주제부터 꿀잼 활동까지 풀세팅!
        </HomeSmallPhraseDiv>

        {/** 인기주제추천  박스 (중앙 가장 큰 네모)*/}
        <HomeHotTopicDiv onClick={handleTutorialClick}>
          <HotTopicPhraseDiv>무드가 처음이신가요?</HotTopicPhraseDiv>
          <SmallHotTopicPhraseDiv>
            차근차근 알려드릴게요.
            <br />
            같이 연습해보아요 <FireImg src={Home_Fire} />
            <QuestionMarkPinkImg src={Home_QuestionMark_pink} />
            <QuestionMarkPink2Img src={Home_QuestionMark_pink} />
            <QuestionMarkBlueImg src={Home_QuestionMark_blue} />
          </SmallHotTopicPhraseDiv>
        </HomeHotTopicDiv>

        {/** 모임기록  박스 (큰 박스 바로 밑 왼쪽)*/}
        <HomeRecentMeetingDiv onClick={handleRecentMoimClick}>
          <RecentMoimphraseDiv>
            <MoimImg src={Home_Moim} />
            당신이 빛낸 최근 모임
            <br />
            <span>5개</span>
          </RecentMoimphraseDiv>
        </HomeRecentMeetingDiv>

        {/** 리뷰  박스 (모임 기록 박스 오른쪽)*/}
        <HomeReviewDiv onClick={handleReviewClick}>
          <span id="reviewText">리뷰하기</span>
        </HomeReviewDiv>

        {/** 시작하기  박스 (가장 밑 파란색)*/}
        <HomeStartDiv onClick={handleCreateMoimClick}>시작하기</HomeStartDiv>
      </HomeContainer>
    </>
  );
}

export default Tutorial2;
