import React from "react";
import { TabView, SceneRendererProps ,TabBar} from 'react-native-tab-view';
import styled from "styled-components/native";

export interface Route {
  key: string;
  title: string;
  icon:any;
 
}

export interface TabProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  navigationState: { index: number; routes: Route[] };
  renderScene: (props: SceneRendererProps & { route: Route }) => React.ReactNode;
  initialLayout?: { width?: number; height?: number };
  styles?: string;
  rounded?: boolean;
<<<<<<< HEAD
  renderTabBar?: (props: any) => React.ReactNode; 
=======
  renderTabBar?: (props: any) => React.ReactNode;
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  tabBarPosition?:"top"|"bottom";
  onIndexChange?: (index: number) => void;
  children?: React.ReactNode;
}

export const StyledTab = styled(TabView)<TabProps>`
  ${(props) => getSizeStyles(props.size as string)}
  ${(props) => props.rounded && "border-radius: 16px;"}
  ${(props) => getVariantStyle(props.variant as string)}
`;

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
<<<<<<< HEAD
        width: 110%;
        height: auto;
        border: 1px solid transparent;
        position: absolute;
   
      `;
    case "large":
      return `
        margin-top: 40%;
=======
        
      `;
    case "large":
      return `
       
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
        width: 100%;
        max-width: 350px;
        height: auto;
        font-size: 18px;
        border: 1px solid transparent;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
      `;
    default:
      return `
        width: 80%;
        height: 150px;
        margin: 20px auto;
        font-size: 16px;
      `;
  }
};

const getVariantStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return `
        background-color: #fff;
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
