import type { ImageProps } from "./image.style";
import { StyledImage } from "./image.style";

interface ImgProps extends ImageProps {
  className?: string;
}

const Image = ({
  children,
  size,
  variant ,
  rounded,
  source,
  className,
  ...props
}: ImgProps) => {
  return (
    <StyledImage
      size={size}
      variant={variant}
      className={className}
      source={source}
      {...props}
    >
      {children}
    </StyledImage>
  );
};

export default Image;
