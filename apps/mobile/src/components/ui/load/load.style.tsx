import React from "react";
import { RefreshControl } from "react-native";
import styled from "styled-components/native";

export interface LoadProps {
  size?: "small" | "medium" | "large";
  styles?: string;
  refreshing?: boolean; 
  children?: React.ReactNode;
  onRefresh?: () => void;
}

export const StyledLoad = styled(RefreshControl)<LoadProps>`
  ${(props) => getSizeStyles(props.size as string)}
  ${(props) => props.styles}
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
