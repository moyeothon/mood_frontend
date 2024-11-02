import React, { useState, useEffect } from "react";
import axios from "axios";
import BackArrow from "../assets/images/BackArrow.png";
import styled from "styled-components";
import { PageContainer } from "../components/Layout";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 57px;
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
  margin-top: 40%;
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

const NoMeetingsMessage = styled.div`
  width: 91%;
  min-height: 60px;
  margin-left: 1%;
  margin-bottom: 3%;
  padding: 10px;
  border: 1px solid #c7c6c6;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserNameDiv = styled.div`
  text-align: center;
  margin-top: 14%;
  span {
    color: #a5e5ff;
  }
`;

const RecentMoimCatchPhrase = styled.div`
  position: absolute;
  line-height: 1.5;
  top: 11%;
  left: 22%;
  width: 120%;
`;

const RecentMoimRecentPhrase = styled.div`
  position: absolute;
  top: 25%;
  font-weight: 900;
  left: 8%;
`;

const RecentToHomeDiv = styled.div`
  position: absolute;
  bottom: -7%;
  left: 15%;
  width: 70%;
  font-weight: 900;
  height: 6%;
  color: white;
  text-align: center;
  border-radius: 10px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function RecentMoim() {
  const [meetings, setMeetings] = useState([]);
  const [myNickname, setMyNickname] = useState(""); // 추가
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleBackArrowClick = () => {
    navigate("/home");
  };

  const handleButtonClick = () => {
    navigate("/home");
  };

  const handleMeetingClick = (id) => {
    navigate(`/pastmoim/${id}`);
  };

  useEffect(() => {
    const fetchMeetings = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/gatherings/my`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: { limit: 5, sort: "desc" },
          }
        );
        setMeetings(response.data.data.gatherings);
        setMyNickname(response.data.data.myNickname); // 추가
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalMeetings = 5; // 항상 5개의 항목 표시
  return (
    <>
      <HeaderContainer>
        <BackArrowImg src={BackArrow} onClick={handleBackArrowClick} />
      </HeaderContainer>
      <PageContainer>
        <div>
          <UserNameDiv>
            <h2>
              <span id="UserName">{myNickname}</span>님
            </h2>
          </UserNameDiv>
          <RecentMoimCatchPhrase>
            <p>당신의 모임은 언제나 특별해요!</p>
          </RecentMoimCatchPhrase>
          <RecentMoimRecentPhrase>
            <h3>최근 모임</h3>
          </RecentMoimRecentPhrase>
          <MeetingUL>
            {Array.from({ length: totalMeetings }, (_, index) => {
              if (index < meetings.length) {
                const meeting = meetings[index];
                const formattedDate = new Date(meeting.createdAt)
                  .toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/\. /g, ".")
                  .replace(/\.$/, "");
                return (
                  <MeetingLi
                    key={meeting.gatheringId}
                    onClick={() => handleMeetingClick(meeting.gatheringId)}
                  >
                    {formattedDate}에 주최한 모임
                  </MeetingLi>
                );
              } else {
                return (
                  <NoMeetingsMessage key={index}>
                    모임이 없습니다.
                  </NoMeetingsMessage>
                );
              }
            })}
          </MeetingUL>
          <RecentToHomeDiv onClick={handleButtonClick}>홈으로</RecentToHomeDiv>
        </div>
      </PageContainer>
    </>
  );
}

export default RecentMoim;
