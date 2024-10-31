import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/Layout';
import LoginCircle from '../assets/images/LoginCircle.png';
import KakaoLogo from '../assets/images/KakaoLogin.png';

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
      const response = await fetch(`http://mood9.shop/api/${provider}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: authCode,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/home');
      } else {
        console.error('로그인 오류:', {
          statusCode: data.statusCode,
          message: data.message
        });
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
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