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
    justify-content: center;
    `
const LogoContainer = styled.div   `
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
`
function Header() {
  return (
    <>
        <HeaderContainer>
            <BackArrowImg src={BackArrow} />
            <LogoContainer>
                <LogoImg src={Logo}/>
            </LogoContainer>
        </HeaderContainer>
    </>
  )
}

export default Header;