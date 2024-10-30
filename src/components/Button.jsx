import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '45px'};
  border: none;
  border-radius: ${props => props.borderRadius || '8px'};
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '20px'};
  font-weight: ${props => props.fontWeight || '600'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.marginBottom || '18px'};
  margin-top: ${props => props.marginTop || '18px'};
  background-color: ${props => props.backgroundColor || props.theme.buttonColor};
  &:active {
    background-color: ${props => props.activeBackgroundColor || props.theme.mainColor};
  }
  ${props => props.customStyle}
`;

const Button = ({ 
  onClick, 
  children, 
  width,
  height,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  marginBottom,
  marginTop,
  backgroundColor,
  activeBackgroundColor,
  customStyle,
  ...props 
}) => {
  return (
    <StyledButton 
      onClick={onClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
      backgroundColor={backgroundColor}
      activeBackgroundColor={activeBackgroundColor}
      customStyle={customStyle}
      marginTop={marginTop}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;