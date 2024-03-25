import React from "react";
import styled from "styled-components/native";
import Timeline from 'react-native-timeline-flatlist';


export interface TimelineData {
  time: string;
  title: string;
  description: string;
}

 export interface TimelineProps {

  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  data?: any[];
  circleColor?: string;
  lineColor?: string;
  timeContainerStyle?: string;
  timeStyle?: string;
  descriptionStyle?: string;
  styles?: string;
  children?: React.ReactNode;
}

export const StyledTimeline = styled(Timeline)<TimelineProps>`

  ${(props) => getVariantStyle(props.variant)}
`;



const getVariantStyle = (variant?: string) => {
  switch (variant) {
    case "primary":
      return `
        margin-top:20px;
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
