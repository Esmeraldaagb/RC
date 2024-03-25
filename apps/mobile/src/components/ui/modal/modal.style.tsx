import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

export interface ModalProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  fullHeight?: boolean;
  styles?: string;
  rounded?:boolean;
  onPress?: () => void;
children: React.ReactNode;

}

export const StyledModal = styled(Modal)<ModalProps>`  
  ${(props) => getSizeStyles(props.size as string)}
  ${(props) => props.rounded && "border-radius: 16px;"}  
  ${(props) => getVariantStyle(props.variant as string)}
  ${(props) => props.fullHeight && "height: 15%;"}
 
`;


const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
        width: 50%;
        margin-top: 15%;
        height: 200px;
        border: 1px solid transparent;
        position: absolute; 
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
        background-color: #EEE9E9;
      `;
    default:
      return `
        background-color: #fff;
      `;
  }
};
