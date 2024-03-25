import React from "react";
import { StyledTimeline } from "./timeline.style";
import type { TimelineProps } from "./timeline.style";

interface Tml extends TimelineProps {
  className?: string;
}

const Timeline: React.FC<Tml> = ({
  variant,
  className,
  data,
  circleColor,
  lineColor,
  timeContainerStyle,
  timeStyle,
  descriptionStyle,
  ...props
}: Tml) => {
  return (
    <StyledTimeline
      variant={variant}
      data={data} 
      circleColor={circleColor}
      lineColor={lineColor}
      timeContainerStyle={timeContainerStyle}
      timeStyle={timeStyle}
      descriptionStyle={descriptionStyle}
      {...props}

    />
  );
};

export default Timeline;
