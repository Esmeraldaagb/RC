import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Image } from "react-native";
import styled from "styled-components/native";

export interface ImageProps {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  styles?: string;
  source?: ImageSourcePropType;
  children?: React.ReactNode;
}

export const StyledImage = styled(Image)<ImageProps>`
  ${(props) => getVariantStyle(props.variant as string)}
  ${(props) => getSizeStyles(props.size as string)}

  ${(props) => props.fullWidth && "width: 80%;"}
  ${(props) => props.rounded && "border-radius: 10px;"}
  ${(props) => props.styles}
`;

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
       margin-top:20px;
    
      `;
    case "secondary":
      return `
        width: 30%;
        height: 30px;
        margin-top: 10px;
      `;
    default:
      return `
        width: 10%;
        height: 10px;
        margin-top: 10px;
      `;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
       
        width: 50%;
        height: 50px;
      `;
    case "medium":
      return `
        font-size: 14px;
      `;
    default:
      return `
        font-size: 16px;
      `;
  }
};
