import { View } from "react-native";
import styled from "styled-components/native";

export interface StatusProps {
  size?: "small" | "medium" | "large";
  voie?: "maritime" | "aerienne";
  etat?: string;
  source?: string;
  children?: React.ReactNode;
}

export const getEtatColor = (etat: string) => {
  switch (etat) {
    case "nouveau":
      return "#2ba9d4";
    case "confirme":
      return "#189634";
    case "en attente de confirmation":
      return "#aa1dae";
    case "non confirme":
      return "#d89913";
    default:
      return "white";
  }
};

const Container = styled(View)`
  flex-direction: row;
  margin-top: 20px;
`;

export const StyledStatus = styled(Container)<StatusProps>`
  font-size: ${(props) => (props.size === "small" ? "14px" : "inherit")};
  color: ${(props) => getEtatColor(props.etat || "")};
`;
