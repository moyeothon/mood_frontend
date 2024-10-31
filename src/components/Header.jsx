import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Logo_with_RescueMe.png'
import BackArrow from '../assets/images/BackArrow.png'

const HeaderContainer = styled.div`
    width: 100%;
    height: 62px;
    box-shadow: 0px 0px 6px rgb(0,0,0,0.12);
    display: flex;
    flex-direction: row;
    align-items: center;
    `
const LogoImg = styled.img`
    width: 25%;
    justify-content: center;
    align-items: center;
`
const BackArrowImg = styled.img`
    width: 7%;
    
`
function Header() {
  return (
    <>
        <HeaderContainer>
            <BackArrowImg src={BackArrow} />
            <LogoImg src={Logo}/>
        </HeaderContainer>
    </>
  )
}

export default Header;