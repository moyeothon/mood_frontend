import React, { useState, useEffect } from "react";
import axios from "axios";
import BackArrow from "../assets/images/BackArrow.png";
import styled from "styled-components";
import { PageContainer } from "../components/Layout";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 62px;
  box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.12);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BackArrowImg = styled.img`
  width: 5%;
  margin-left: 5%;
  cursor: pointer;
`;
const MeetingUL = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 60%;
`;
const MeetingLi = styled.div`
  width: 91%;
  min-height: 60px;
  margin-left: 1%;
  border: 1px solid #c7c6c6;
  margin-bottom: 3%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const UserNameDiv = styled.div`
  text-align: center;
  margin-top: 14%;
`;
const RecentMoimCatchPhrase = styled.div`
  position: absolute;
  top: 11%;
  left: 22%;
  width: 120%;
`;
const RecentMoimRecentPhrase = styled.div`
  position: absolute;
  top: 32%;
  font-weight: 900;
  left: 8%;
`;

function RecentMoim() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // 네비게이트 훅 사용

  const handleBackArrowClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    // const fetchMeetings = async () => {
    //   try {
    //     const response = await axios.get("/api/meetings", {
    //       params: { limit: 5 },
    //     });
    //     setMeetings(response.data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchMeetings();

    // 임시 데이터를 사용하여 미리보기 가능하게 설정
    const mockData = [
      { id: 1, title: "모임 A", date: "2024-10-10" },
      { id: 2, title: "모임 B", date: "2024-10-09" },
      { id: 3, title: "모임 C", date: "2024-10-08" },
      { id: 4, title: "모임 D", date: "2024-10-07" },
      { id: 5, title: "모임 E", date: "2024-10-06" },
    ];
    setMeetings(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <HeaderContainer>
        <BackArrowImg src={BackArrow} onClick={handleBackArrowClick} />
      </HeaderContainer>
      <PageContainer>
        <div>
          <UserNameDiv>
            <h2>구해줘_내_성대님</h2>
          </UserNameDiv>
          <RecentMoimCatchPhrase>
            <p>당신의 모임은 언제나 특별해요!</p>
          </RecentMoimCatchPhrase>
          <RecentMoimRecentPhrase>
            <h3>최근 모임</h3>
          </RecentMoimRecentPhrase>
          <MeetingUL>
            {meetings.map((meeting) => (
              <MeetingLi key={meeting.id}>
                {meeting.title} - {meeting.date}
              </MeetingLi>
            ))}
          </MeetingUL>
        </div>
      </PageContainer>
    </>
  );
}

export default RecentMoim;
