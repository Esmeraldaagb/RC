import type React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export interface AccordionProps {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large";
  title: string;
  content: string;
  rounded:boolean;
  styles?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

export const StyledAccordion = styled(Pressable)<AccordionProps>`
  ${(props) => getVariantStyle(props.variant as string)}

  ${(props) => props.styles}
  ${(props) => props.rounded && "border-radius: 9999px;"}

   ${(props) => getSizeStyles(props.size as string)}
`;

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
            width:80%;
            height:50px;
            background-color: #b472b6;
           
        `;
    case "secondary":
      return `
            background-color: #b472b6;
           
        `;
    default:
      return `
            background-color: #c077c9;
            color: #fff;
        `;
  }
};


const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
           margin-top:20px;
            font-size: 12px;
            `;
    case "medium":
      return `

      margin-top:20px;
      font-size: 14px;
            `;
    default:
      return `
            margin-top:20px;
            font-size: 16px;
            `;
  }
};
