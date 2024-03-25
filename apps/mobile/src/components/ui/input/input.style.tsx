import React, { useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export interface InputProps {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  styles?: string;
  placeholder?: string;
  value?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
  onChangeText?: (text: string) => void;
  onBlur?: ()=> void;
  onFocus?: ()=> void;
=======
  
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
}

export const StyledInput = styled(TextInput)<InputProps>`
  ${(props) => getVariantStyle(props.variant as string)}

  ${(props) => props.fullWidth && "width: 80%;"}

  ${(props) => props.rounded && "border-radius: 10px;"}

  ${(props) => props.styles}
  
  ::placeholder {
<<<<<<< HEAD
    color: #000; 
   }
=======
    color: #c22121; 
    text-align:center;

  }
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
`;

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
        background-color: #fff;
        width: 100%;
<<<<<<< HEAD
        height: 30px;
        margin-top: 10px;
        margin-start: 10px;
        color: #f00; 

=======
        height: 50px;
        margin-top: 10px;
        margin-start: 10px;
        border:1px solid #8c8888;
        padding:10px;
        margin-top:10px;
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
      `;
    case "secondary":
      return `
        background-color: #fff;
<<<<<<< HEAD
        width: 30%;
        height: 30px;
        margin-start: 10px;

=======
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
        margin-top: 10px;
      `;
    default:
      return `
        background-color: #fff;
        margin-top: 10px;
      `;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
        font-size: 12px;
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
