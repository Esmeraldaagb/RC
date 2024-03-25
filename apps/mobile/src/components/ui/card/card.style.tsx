import type React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export interface CardProps {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  fullHeight?: boolean;
  styles?: string;
  children: React.ReactNode;
}

export const StyledCard = styled(View)<CardProps>`
  ${(props) => getSizeStyles(props.size as string)}
  ${(props) => props.fullWidth && "width: 100%;"}
  ${(props) => props.rounded && "border-radius: 16px;"} 
  ${(props) => getVariantStyle(props.variant as string)}
  ${(props) => props.fullHeight && "height: 15%;"}
  ${(props) => props.styles}

`;

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
<<<<<<< HEAD
      width: 100%;  
      margin-top: -15%;
      height: 25%;
      border: 1px solid transparent;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
      position: fixed;
      
=======
        width: 100%;
        margin-top:-15%;
        height: 25%;
        border: 1px solid transparent;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
        positon:fixed;
   

>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
      `;
    case "large":
      return `
    margin-top: 40%;
    width: 100%; 
    max-width: 350px; 
    height: auto; 
    font-size: 18px;
    border: 1px solid transparent;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
<<<<<<< HEAD

=======
    positon:fixed;
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101

  `;
    default:
      return `
        width: 80%;
        height: 150px;
        margin: 20px auto;
        font-size: 16px;
      `;
  }
};

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
        background-color: #fff;
      `;
    case "secondary":
      return `
        background-color: #fff;
     `;
    default:
      return `
        background-color: #fff;
   
      `;
  }
};
