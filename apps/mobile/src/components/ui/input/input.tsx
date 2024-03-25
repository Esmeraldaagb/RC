import type { InputProps } from "./input.style";
<<<<<<< HEAD
import { StyledInput } from "./input.style";

interface InpProps extends InputProps {
  className?: string;
}

const Input = ({
  children,
  size = "small",
  variant = "primary",
  placeholder,
  value,
=======
import { StyledInput} from "./input.style";

interface InpProps extends InputProps {
  className?: string;
  onChangeText?: (text: string) => void;
}

const Input = ({
  size = "small",
  variant = "primary",
  placeholder="",
  value="",
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  className,
  ...props
}: InpProps) => {
  return (
    <StyledInput
      size={size}
      variant={variant}
      className={className}
      placeholder={placeholder}
      value={value}
      {...props}
<<<<<<< HEAD
    >
      {children}
    </StyledInput>
=======
    />
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  );
};

export default Input;
