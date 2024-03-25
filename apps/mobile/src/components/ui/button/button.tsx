import type { ButtonProps } from "./button.style";
import { StyledButton } from "./button.style";

interface BtnProps extends ButtonProps {
  className?: string;
}

const Button = ({
  children,
  size = "small",
  variant = "primary",
  className,
  ...props
}: BtnProps) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
