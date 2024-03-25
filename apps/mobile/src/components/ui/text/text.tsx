import type { TextProps } from "./text.style";
import { StyledText } from "./text.style";

interface TxtProps extends TextProps {
  className?: string;
}

const Text = ({
  children,
  size = "small",
  variant = "primary",
  className,
  ...props
}: TxtProps) => {
  return (
    <StyledText
    size={size}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
