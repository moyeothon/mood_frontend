import React, { useEffect, useRef, useState } from 'react'
import { PageContainer } from '../components/Layout'
import Header from '../components/Header'
import styled from 'styled-components'
import ForwardArrow from '../assets/images/ForwardArrow.png'
import First from '../assets/images/1.png'
import Second from '../assets/images/2.png'
import Third from '../assets/images/3.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { makeMoim } from '../api/makeMoim'
import { makeNewTopic } from '../api/makeNewTopic'
import Loading from '../components/Loading'
import ErrorModal from '../components/ErrorModal'

const Title = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 30px 0px;
`
const Container = styled.div`
    width: 86%;
    height: 50%;
    padding: 19px 23px;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 10px;
`
const Divider = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,0.03);
  height: 1px;
`

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; //수정
    margin: 10px 0px;
    cursor: pointer;
`

const SubTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.extrabold};
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
`
const Topic = styled.div`
  width: 85%;
  margin: 0px 5px;
  font-size: 15px;
  flex-wrap: wrap;
  line-height: 1.5;
`
const ArrowImg = styled.img`
  width: 3%;
`
const RankImg = styled.img`
  margin-right: 5px;
  width: 8%;
`
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
  
  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
  }
`
const GoContainer = styled.div`
  width: 100%;
  height: 150px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function TopicResult() {
  const location = useLocation();
  const [topicData, setTopicData] = useState();
  const [activitydata, setActivityData] = useState();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [id, setId] = useState();
  const [isNull, setIsNull] = useState(false);
  const navigate = useNavigate();
  const moimInfo = { ...location.state };
  const [isLoading, setIsLoading] = useState(true);
  // const [shouldFetch, setShouldFetch] = useState(true);

  const ImgNumber = [First, Second, Third];


  //주제 생성하기
  const makeTopic = async () => {
    setIsLoading(true);

    // 응답 필드 중 하나라도 null이면 true 반환
    const checkForNullValues = (data) => {
      const fieldsToCheck = [
        data.host,
        data.relationshipType,
        data.peopleCount,
        data.vibe,
        data.averageAge,
        data.commonInterests
      ];
        return fieldsToCheck.some(field => field === null);
      };
      
    try {
      const getTopic = await makeMoim(moimInfo);
      console.log(getTopic.data);

      if (getTopic) {
        setTopicData(getTopic.data.conversationTopicInfoResDtos)
        setActivityData(getTopic.data.suggestedActivityInfoResDtos)
        setId(getTopic.data.gatheringId);
      }

      if(checkForNullValues(getTopic)) {
        setIsNull(true)
      }

    } catch (error) {
      if (error.status === 401 || isNull) {
        console.error(error);
        setShowErrorModal(true)
      }
    } finally {
      setIsLoading(false);
    }
  }

  //마운트 시 모임 생성 api 호출
  useEffect(() => {
    if(location.state?.fromCreateMoim) {
      makeTopic();
    }
  }, [location.state])

  //모임 정보 다시 입력하기
  const handleBackToMoimInfo = () => {
    navigate('/createmoim');
  }

  //다른 주제 추천받기
  const handleMakeNewTopic = async (id) => {
    setIsLoading(true);
    try {
      const getNewTopic = await makeNewTopic(id);
      console.log('new:', getNewTopic.data);

      if (getNewTopic) {
        setTopicData(getNewTopic.data.conversationTopicInfoResDtos)
        setActivityData(getNewTopic.data.suggestedActivityInfoResDtos)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }}


  const handleErrorModal = () => {
    makeTopic();
    setShowErrorModal(false);
    }


    const handleTopicClick = (topic, description) => {
      navigate('/topicdetail', {
        state: {
          title: topic,
          description: description
        }
      });
    };
  
  // 더미데이터
  // const topicData = {
  //   "conversationTopicInfoResDtos": [
  //     {
  //       "topic": "음악을 통해 발견한 새로운 취미",
  //       "description": "참석자들이 음악과 관련하여 새로운 취미를 어떻게 시작하게 되었는지를 공유합니다. 예를 들어, 기타를 배우거나 DJing에 도전한 경험 등을 나누면 분위기가 활발해질 수 있습니다."
  //     },
  //     {
  //       "topic": "살면서 가장 감명 깊었던 콘서트 경험",
  //       "description": "각자가 가장 기억에 남는 콘서트나 라이브 공연의 순간을 공유합니다. 이는 특별한 추억을 나누고 서로 더 가까워질 수 있는 기회를 제공합니다."
  //     },
  //     {
  //       "topic": "자신의 인생에서 '사운드트랙'이 된 노래",
  //       "description": "각자의 삶의 중요한 순간에 배경이 되었던 노래들을 이야기합니다. 이 주제는 서로의 이야기를 통해 공통점을 발견하고 연결 고리를 만들 수 있습니다."
  //     }
  //   ]
  // }

    return (
      <>
      {isLoading ? (
        <Loading/>
      ) : (
      <>
        <Header where='/createmoim'/>
        <PageContainer>
          <Title>
            무드가 여러분들을 위한 결과를 가져왔어요 🧊
          </Title>
          <Container>

                <SubTitle>
                  무드의 추천 대화 주제
                </SubTitle>
                {topicData && topicData.conversationTopicInfoResDtos.map((item, index) => {
                  return (
                    <React.Fragment key={item.topic}>
                      <ContentContainer 
                    onClick={() => handleTopicClick(item.topic, item.description)}
                  >
                        <RankImg src={ImgNumber[index]} />
                        <Topic>{item.topic}</Topic>
                        <ArrowImg src={ForwardArrow} />
                      </ContentContainer>
                      <Divider />
                    </React.Fragment>
                  )
                })}
              </Container>

          <Container>

          <SubTitle>
            무드의 추천 활동
          </SubTitle>
          {activitydata && activitydata.suggestedActivityInfoResDtos.map((item, index) => {
            return (
              <React.Fragment key={item.activity}>
                <ContentContainer 
                  onClick={() => handleTopicClick(item.activity, item.description)}
                >
                  <RankImg src={ImgNumber[index]} />
                  <Topic>{item.activity}</Topic>
                  <ArrowImg src={ForwardArrow} />
                </ContentContainer>
                <Divider />
              </React.Fragment>
            )
          })}
          </Container>
                <GoContainer>
            <GoButton onClick={()=>handleMakeNewTopic(id)}>
              다른 주제 추천 받기 🥶
            </GoButton>
            <GoButton onClick={()=>handleBackToMoimInfo()}>
              모임 정보 다시 입력하기 
            </GoButton>
          </GoContainer> 

          </PageContainer>
        </>
      )}
      {showErrorModal && (
        <ErrorModal
          onClose={handleErrorModal}
        />
      )}
      
    </>

  );
}

  export default TopicResult;
