import type { CardProps } from "./card.style";
import { StyledCard } from "./card.style";

interface CrdProps extends CardProps {
  className?: string;
}

const Card = ({
  children,
<<<<<<< HEAD
  size = "small",
  variant = "primary",
  rounded=false,
=======
  size = "large",
  variant = "primary",
  rounded = false,
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  className,
  ...props
}: CrdProps) => {
  return (
    <StyledCard
<<<<<<< HEAD
        size={size}
      variant={variant}
      rounded={rounded}
      className={className}
      {...props}
=======
    size={size}
    variant={variant}
    rounded={rounded}
    className={className}
    {...props}
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
    >
      {children}
    </StyledCard>
  );
};

export default Card;
