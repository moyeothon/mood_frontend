// Review List를 위한 컴포넌트
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewItem from './ReviewItem';
import Button from '../Button';
import ReviewPencil from '../../assets/images/ReviewPencil.png';

const ReviewListContainer = styled.div`
  padding: 0px;
  margin-top: 10px;
  text-align: center;
`;

const ReviewTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  margin: 0;
  margin-bottom: 4px;
  text-align: center;
`;

const ReviewSubtitle = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 13px;
`;

const WriteButton = styled(Button)`
  width: 134px;
  height: 31px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #A5E5FF;
  color: #000000;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PencilIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://mood9.shop/api/reviews', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setReviews(response.data.data.reviews);
        console.log(response.data.data.reviews);
      } catch (error) {
        console.error('리뷰 데이터 조회 실패:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <ReviewListContainer>
      <ReviewTitle>리뷰</ReviewTitle>
      <ReviewSubtitle>서비스 이용 후기를 남겨주세요!</ReviewSubtitle>
      <ButtonWrapper>
        <WriteButton onClick={() => window.location.href = '/review/write'}>
          <ButtonContent>
            리뷰 작성하기
            <PencilIcon src={ReviewPencil} alt="pencil" />
          </ButtonContent>
        </WriteButton>
      </ButtonWrapper>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </ReviewListContainer>
  );
};

export default ReviewList; 