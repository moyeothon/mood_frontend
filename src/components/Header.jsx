import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Logo_with_RescueMe.png'
import BackArrow from '../assets/images/BackArrow.png'
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
    width: 100%;
    height: 62px;
    box-shadow: 0px 0px 6px rgb(0,0,0,0.12);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const LogoContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoImg = styled.img`
    width: 25%;
`

const BackArrowImg = styled.img`
    width: 5%;
    cursor: pointer;
`

function Header({ where }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate(where.startsWith('/') ? where : `/${where}`);
        }
    };

    const handleClickLogo = () => {
        navigate('/home');
    }

    return (
        <>
            <HeaderContainer>
                <BackArrowImg 
                    src={BackArrow} 
                    onClick={handleBackClick}
                />
                <LogoContainer>
                    <LogoImg src={Logo} onClick={handleClickLogo}/>
                </LogoContainer>
            </HeaderContainer>
        </>
    );
}

export default Header;