import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from '../Button';
import YellowStar from '../../assets/images/ReviewYellowStar.png';
import GrayStar from '../../assets/images/ReviewGrayStar.png';
import CloseButton from '../../assets/images/ReviewClose.png';

const WriteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 33px 29px 15px 0;
  display: flex;
  justify-content: flex-end;
`;

const CloseButtonImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  margin: 0 0 36px 0;
  text-align: center;
`;

const StarContainer = styled.div`
  display: flex;
  gap: 13.33px;
  margin-bottom: 36px;
  justify-content: center;
`;

const Star = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  width: 346px;
  height: 484px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.lightgrayColor};
  border-radius: 18px;
  margin-bottom: 36px;
  resize: none;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  box-sizing: border-box;
  max-width: 346px;
  max-height: 484px;
  
  &::placeholder {
    color: #999;
    font-size: 16px;
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.mainColor};
  }
`;

const SubmitButton = styled(Button)`
  width: 300px;
  background-color: #000000 !important;
  color: white;
  font-size: 16px;
`;

const ReviewWrite = () => {
  const [starCount, setStarCount] = useState(0);
  const [content, setContent] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleStarClick = (count) => {
    setStarCount(count);
  };

  const handleTextAreaFocus = () => {
    setShowPlaceholder(false);
  };

  const handleTextAreaBlur = () => {
    if (!content) {
      setShowPlaceholder(true);
    }
  };

  const handleClose = () => {
    window.history.back();
  };

  const handleSubmit = async () => {
    // 요청 전 데이터 확인
    console.log('전송할 리뷰 데이터:', {
      starCount,
      content
    });

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/reviews`, {
        starCount,
        content
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      // 응답 데이터 확인
      console.log('서버 응답:', response.data);
      
      // 성공 시 리뷰 목록으로 이동
      window.location.href = '/review';
    } catch (error) {
      console.error('리뷰 작성 실패:', error);
      // 에러 상세 정보 확인
      console.error('에러 응답:', error.response?.data);
    }
  };

  return (
    <WriteContainer>
      <HeaderContainer>
        <CloseButtonImg 
          src={CloseButton} 
          alt="close" 
          onClick={handleClose}
        />
      </HeaderContainer>
      <Title>리뷰를 작성해 보세요!</Title>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            src={index <= starCount ? YellowStar : GrayStar}
            alt={`star-${index}`}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </StarContainer>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        placeholder={showPlaceholder ? "욕설, 비방, 명예훼손성 표현은 누군가에게 상처가 될 수 있습니다." : ""}
      />
      <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </WriteContainer>
  );
};

export default ReviewWrite; 