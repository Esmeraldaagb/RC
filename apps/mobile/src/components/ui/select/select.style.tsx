import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Dropdown } from 'react-native-element-dropdown';

 export interface SelectProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  label?: string;
  labelField?: string;
  styles?: string;
  data?: Array<{ label: string; value: string }>;
  value: string;
  valueField?: string;
  inputSearchStyle?: string;
  selectTextStyle?: string;
  searchStyle?: string;
  placeholderStyle?: string;
  placeholder?: string;
  
  searchPlaceholder?: string;
  children: React.ReactNode;
  onChange?: (itemValue: string) => void;
}

export const StyledSelect = styled(Dropdown)<SelectProps>`
  ${(props) => getVariantStyle(props.variant as string)}
  ${(props) => getSizeStyles(props.size as string)}
  ${(props) => props.placeholderStyle};
  ${(props) => props.selectTextStyle };
  ${(props) => props.searchStyle };
  ${(props) => props.fullWidth && "width: 100%;"}
  ${(props) => props.rounded && "border-radius: 10px;"}
  ${(props) => props.styles}
`;

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
        background-color: #fff;
        width: 80%;
        height: 30px;
        margin-top: 10px;
        margin-start: 10px;
        box-shadow: 0 2px 4px gry; 
        border: 1px solid #000;
      `;
    case "secondary":
      return `
        background-color: #fff;
        margin-top: 10px;
        width: 30%;
        height: 30px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        border: 1px solid #000;
      `;
    default:
      return `
        width: 80%;
        height: 30px;
        background-color: #fff;
        margin-top: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        border: 1px solid #000;
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
