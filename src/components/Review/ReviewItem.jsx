// 개별 Review Item을 위한 컴포넌트
import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';

const ReviewItemContainer = styled.div`
  padding: 20px 0;
  border-top: 2px solid #F5F5F5;
  margin-bottom: 10px;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ReviewWriter = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: #000000;
`;

const ReviewContentBox = styled.div`
  width: 90%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const ReviewContent = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  word-break: break-word;
  text-align: left;
  line-height: 1.5;
`;

const StarWrapper = styled.div`
  width: 85px;
  height: 13px;
  display: flex;
  align-items: center;
`;

const ReviewItem = ({ review }) => {
  return (
    <ReviewItemContainer>
      <UserSection>
        <ReviewWriter>{review.writer}</ReviewWriter>
        <StarWrapper>
          <StarRating count={review.starCount} />
        </StarWrapper>
      </UserSection>
      <ReviewContentBox>
        <ReviewContent>{review.content}</ReviewContent>
      </ReviewContentBox>
    </ReviewItemContainer>
  );
};

export default ReviewItem; 