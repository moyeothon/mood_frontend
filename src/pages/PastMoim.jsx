import React, { useState, useEffect } from "react";
import axios from "axios";
import BackArrow from "../assets/images/BackArrow.png";
import styled from "styled-components";
import { PageContainer } from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

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

const Title = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 30px 0px;
`;

const Container = styled.div`
  width: 86%;
  padding: 19px 23px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const MeetingUL = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const MeetingLi = styled.div`
  width: 100%;
  min-height: 60px;
  margin-bottom: 3%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid #c7c6c6;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const NoMeetingsMessage = styled.div`
  width: 100%;
  min-height: 60px;
  margin-bottom: 3%;
  padding: 10px;
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
`;

function PastMoim() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBackArrowClick = () => {
    navigate("/recentmoim");
  };

  useEffect(() => {
    const fetchPastMeetings = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        const response = await axios.get(
          `https://mood9.shop/api/gatherings/${id}/past`, // 필요한 경우 엔드포인트 조정
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMeetings(response.data.data.gatherings || []); // 응답 구조에 따라 조정
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastMeetings();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div>오류: {error.message}</div>;

  return (
    <>
      <HeaderContainer>
        <BackArrowImg src={BackArrow} onClick={handleBackArrowClick} />
      </HeaderContainer>
      <PageContainer>
        <Title>과거 모임</Title>
        <Container>
          <UserNameDiv>
            <h2>구해줘_내_성대님</h2>
          </UserNameDiv>
          <MeetingUL>
            {meetings.length > 0 ? (
              meetings.map((meeting) => (
                <MeetingLi key={meeting.gatheringId}>
                  {meeting.date}에 주최한 모임 - 주최자: {meeting.host}
                </MeetingLi>
              ))
            ) : (
              <NoMeetingsMessage>모임이 없습니다.</NoMeetingsMessage>
            )}
          </MeetingUL>
        </Container>
      </PageContainer>
    </>
  );
}

export default PastMoim;
