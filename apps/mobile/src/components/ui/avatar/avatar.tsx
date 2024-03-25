<<<<<<< HEAD
import React from "react";
=======

>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
import type { AvatarProps } from "./avatar.style";
import { StyledAvatar } from "./avatar.style";

interface AvtProps extends AvatarProps {
<<<<<<< HEAD
  className?: string;
=======
  source?: any;
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
}

const Avatar = ({
  size = "small",
<<<<<<< HEAD
  variant = "primary",
  source = "",
  className,
=======
  source,
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  ...props
}: AvtProps) => {
  return (
    <StyledAvatar
      size={size}
<<<<<<< HEAD
      variant={variant}
=======
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
      source={source}
      {...props}
    />
  );
};

export default Avatar;
