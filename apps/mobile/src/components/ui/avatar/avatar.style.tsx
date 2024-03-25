import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

export interface AvatarProps {
<<<<<<< HEAD
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  styles?: string;
  source?: any; 
=======
  size?: "small" | "medium" | "large";
  styles?: string;
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  children?: React.ReactNode;
  onChange?: () => void;
}

<<<<<<< HEAD
const defaultImagePath = "../../assets/ghost.png";

export const StyledAvatar = styled(Image)<AvatarProps>`
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  ${(props) => props.fullWidth && "width: 80%;"}
  ${(props) => props.rounded && "border-radius: 50px;"}
  
 
  background-color: #fff;
  background-image: ${(props) => (props.variant && props.variant !== "ghost" ? `url(${defaultImagePath})` : "none")};
  background-size: cover;
  background-position: center;

  ${(props) => {
    switch (props.variant) {
      case "primary":
      case "secondary":
      default:
        return `
          width: 90px; 
          height: 90px; 
          margin-top: 50px;
          margin-start: 50px;
        `;
    }
  }}
=======
export const StyledAvatar = styled(Image)<AvatarProps>`


${(props) => getSize(props.size as "small" | "medium" | "large")}
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101

  ${(props) => props.styles}
`;

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
<<<<<<< HEAD
      return "40px";
    case "medium":
      return "80px";
    case "large":
      return "120px";
    default:
      return "80px"; 
=======
      return `
        width: 39px;
        height: 39px;
      `;
    case "medium":
      return `
        width: 50px;
        height: 50px;
      `;
    case "large":
      return `
        width: 100px;
        height: 100px;
      `;
    default:
      return `
        width: 39px;
        height: 39px;
      `; 
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  }
};
