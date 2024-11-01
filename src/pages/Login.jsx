import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/Layout';
import LoginCircle from '../assets/images/LoginCircle.png';
import KakaoLogo from '../assets/images/KakaoLogin.png';
import axios from 'axios';

const LoginContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0;
`;

const LoginCircleImage = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: 55px;
`;

const KakaoLoginImage = styled.img`
  cursor: pointer;
  width: 300px;
`;

function Login() {
  const navigate = useNavigate();

  const kakaoLogin = () => {
    localStorage.setItem("provider", "kakao");
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c88d155ce18616f58d5b8694aafec094&redirect_uri=http://localhost:3000/login`;
  };

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const provider = localStorage.getItem("provider");

    if (code) {
      getToken(code, provider);
    }
  }, []);

  const getToken = async (authCode, provider) => {
    try {
      const response = await axios.post(`https://mood9.shop/api/${provider}/token`, {
        code: authCode,
      });
      
      console.log('서버 응답:', response.data);
      
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
        navigate('/home');
      }
    } catch (error) {
      console.error('에러 상태 코드:', error.response?.status);
      console.error('에러 데이터:', error.response?.data);
      console.error('에러 헤더:', error.response?.headers);
      console.error('전체 에러 객체:', error);
    }
  };

  return (
    <LoginContainer>
      <LoginCircleImage 
        src={LoginCircle} 
        alt="로그인 이미지" 
      />
      <KakaoLoginImage 
        src={KakaoLogo} 
        alt="카카오 로그인" 
        onClick={kakaoLogin}
      />
    </LoginContainer>
  );
}

export default Login;