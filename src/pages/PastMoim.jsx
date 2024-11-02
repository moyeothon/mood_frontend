import React, { useEffect, useState } from "react";
import { makePastMoim } from "../api/makeMoim";

function PastMoim({ id }) {
  const [topicData, setTopicData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Error 상태 추가

  const fetchPastMoimData = async () => {
    setIsLoading(true);
    setError(null); // Reset error state on new fetch
    try {
      const data = await makePastMoim(id);
      setTopicData(
        data.conversationTopicInfoResDtos.conversationTopicInfoResDtos || []
      ); // 기본값 설정
      setActivityData(
        data.suggestedActivityInfoResDtos.suggestedActivityInfoResDtos || []
      ); // 기본값 설정
    } catch (error) {
      console.error("Error fetching past meeting data:", error);
      setError("과거 모임 데이터를 가져오는 중 오류가 발생했습니다."); // 에러 메시지 설정
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPastMoimData();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>; // 에러 메시지 표시

  return (
    <div>
      <h2>Conversation Topics</h2>
      {topicData.length > 0 ? (
        topicData.map((topic, index) => (
          <div key={index}>
            <h3>{topic.topic}</h3>
            <p>{topic.description}</p>
          </div>
        ))
      ) : (
        <div>주제 데이터가 없습니다.</div> // 데이터 없을 때 메시지
      )}
      <h2>Suggested Activities</h2>
      {activityData.length > 0 ? (
        activityData.map((activity, index) => (
          <div key={index}>
            <h3>{activity.activity}</h3>
            <p>{activity.description}</p>
          </div>
        ))
      ) : (
        <div>활동 데이터가 없습니다.</div> // 데이터 없을 때 메시지
      )}
    </div>
  );
}

export default PastMoim;
