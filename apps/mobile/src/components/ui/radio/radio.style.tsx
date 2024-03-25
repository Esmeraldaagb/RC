import type React from "react";
import { Switch } from "react-native";
import styled from "styled-components/native";

export interface RadioProps {
  size?: "small" | "medium" | "large";
}

export const StyledRadio = styled(Switch)<RadioProps>`

${(props) => getSizeStyles(props.size as string)}
`;

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
            margin-top:20px;
            `;
    case "medium":
      return `
        margin-top:30px;
            `;
    default:
      return `
        margin-top:20px;
            `;
  }
};
