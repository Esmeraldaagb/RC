import React from "react";
import { StyledTab } from "./tab.style";
import type { TabProps } from "./tab.style";

interface TbProps extends TabProps {
  className?: string;
  
}
const Tab: React.FC<TabProps> = ({
<<<<<<< HEAD
  size ,
  className,
  navigationState,
  renderScene,
  tabBarPosition,
=======
  size = "small",
  variant = "primary",
  className,
  navigationState,
  renderScene,
  tabBarPosition="bottom",
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  initialLayout,
  ...props
}: TbProps) => {
  return (
    <StyledTab
      size={size}
<<<<<<< HEAD
=======
      variant = {variant}
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
      className={className}
      navigationState={navigationState}
      renderScene={renderScene}
      initialLayout={initialLayout}
      renderTabBar={props.renderTabBar}
      tabBarPosition={tabBarPosition}
      {...props}
    />
  );
};

export default Tab;