import React, { useEffect, useState } from 'react'
import styled ,{ keyframes } from 'styled-components'
import Logo from '../assets/images/JustLogo.png'
import { useNavigate } from 'react-router-dom';
import SplashImg from '../assets/images/SplashCircle.png'
import { PageContainer } from '../components/Layout';

const fadeInOut = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
`;
const SplashContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    animation: ${fadeInOut} 3s ease-in-out;
    animation-fill-mode: forwards;
    margin-bottom: 60px;
`
const SplashWrapper = styled.div`
    display: { isHidden ? 'none' : 'block'};
`
const SubTitle = styled.div`
    color: #000;
    font-size: 20px;
    text-align: start;
    animation: ${fadeInOut} 3s ease-in-out;
    animation-fill-mode: forwards;
    font-family: ${({ theme }) => theme.fonts.extrabold};
`
const LogoImg = styled.img`
    width: 268px;
    height: 100px;
`
const Splash = () => {
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = useState(false);

      //인증된 사용자면 홈 화면으로 이동, 그렇지 않으면 로그인 페이징로 이동
      useEffect(()=>{
        const checkUser = () => {
            const isAuthenticated = false;
            return isAuthenticated;
        };

        const timer = setTimeout(()=>{
            setIsHidden(true);
            if(checkUser()){
                navigate('/home');
            } else{
                navigate('/home'); //나중에 login으로 이동
            }
            }, 10000);

            return () => clearTimeout(timer);
      }, [navigate]);

  return (
    <SplashWrapper isHidden={isHidden}>
        <SplashContainer>
            <img src={SplashImg} alt='splashImg'></img>
        </SplashContainer>
        <PageContainer>
        <LogoImg src={Logo}/>
        <SubTitle> 어색함은 이제 무드가 구한다.</SubTitle>
        </PageContainer>
    </SplashWrapper>
  )
}

export default Splash;