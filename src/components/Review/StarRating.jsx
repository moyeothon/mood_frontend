// 별점 표시를 위한 컴포넌트
import React from 'react';
import styled from 'styled-components';
import YellowStar from '../../assets/images/ReviewYellowStar.png';
import GrayStar from '../../assets/images/ReviewGrayStar.png';

const StarContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.img`
  width: 13px;
  height: 13px;
`;

const StarRating = ({ count }) => {
  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star 
          key={index} 
          src={index <= count ? YellowStar : GrayStar} 
          alt={`star-${index}`}
        />
      ))}
    </StarContainer>
  );
};

export default StarRating; 