import React from "react";
import { Text } from "react-native";
import { StyledStatus, getEtatColor } from "./status.style"; 
import type { StatusProps } from "./status.style";

interface StsProps extends StatusProps {
  className?: string;
}

const Status = ({ size, etat, className, ...props }: StsProps) => {
  const textColor = getEtatColor(etat || ""); // Utilisation par défaut si etat est undefined

  return (
    <StyledStatus size={size} className={className} etat={etat} {...props} >
      <Text style={{ marginLeft: 50, fontSize: 14, color: textColor,textAlign: "left",fontWeight:"bold" }}>
        {etat}
      </Text>
    </StyledStatus>
  );
};

export default Status;
