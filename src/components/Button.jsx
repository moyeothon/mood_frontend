import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '36px'};
  border: none;
  border-radius: ${props => props.borderRadius || '8px'};
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '20px'};
  font-weight: ${props => props.fontWeight || '600'};
  flex-basis : auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.marginBottom || '18px'};
  margin-top: ${props => props.marginTop || '18px'};
  background-color: ${props => props.backgroundColor || '#F2F2F2'};
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