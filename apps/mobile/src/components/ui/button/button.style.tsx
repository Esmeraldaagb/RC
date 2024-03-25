import type React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: number;
  loading?: boolean;
  disabled?: boolean;
  styles?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

export const StyledButton = styled(Pressable)<ButtonProps>`
  ${(props) => getVariantStyle(props.variant as string)}

  ${(props) => props.disabled && getDisabledStyle(props.disabled)}

${(props) => props.fullWidth && "width: 100%;"}

${(props) => props.rounded && `border-radius: ${props.rounded}px;`}

${(props) => props.loading && getLoadingStyle(props.loading)}

${(props) => props.styles}

${(props) => getSizeStyles(props.size as string)}
`;

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
            background-color: #980000;
            color: #fff;
        `;
    case "secondary":
      return `
            background-color: #FFFFFF;
            color: #fff;
        `;
    default:
      return `
            background-color: #c077c9;
            color: #fff;
        `;
  }
};

const getDisabledStyle = (disabled: boolean) => {
  if (disabled) {
    return `
        background-color: #ccc;
        color: #fff;
        `;
  }
};

const getLoadingStyle = (loading: boolean) => {
  if (loading) {
    return `
            background-color: #ccc;
            color: #fff;
            `;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
            width:80%;
            height:30px;
            font-size: 12px;
            `;
    case "medium":
      return `
         width:30%;
         height:30px;
         font-size: 14px;
            `;
    default:
      return `
            padding: 10px 20px;
            font-size: 16px;
            `;
  }
};
