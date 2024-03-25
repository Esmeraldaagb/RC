import type React from "react";
import { View ,Text} from "react-native";
import styled from "styled-components/native";

 export interface TextProps {
    size?: string;
    variant?: string;
    marginTop?: string;
    textAlign?: string;
    flexDirection?: string;
    children: React.ReactNode;
    
  }
  
 export const StyledText = styled(Text)<TextProps>`
    font-size: ${(props) => (props.size === "small" ? "12px" : "16px")};
    color: ${(props) => (props.variant === "primary" ? "black" : "green")};
    margin-top: ${(props) => props.marginTop || "10px"};
   
  `;