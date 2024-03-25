import { View } from "react-native";
import type { ModalProps } from "./modal.style";
import { StyledModal } from "./modal.style";

interface MdlProps extends ModalProps {
  className?: string;
  animationType?: "slide" | "fade" | "none";
  transparent?: boolean;
  visible?: boolean;
  onRequestClose?:any;
  onShow?:any;
}

const Modal = ({
  children,
  size = "small",
  variant = "primary",
  rounded,
<<<<<<< HEAD
  animationType = "slide",  
=======
  animationType = "slide",
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  transparent = true,
  visible =  true,
  onRequestClose,
  onShow,
  className,
  ...props
}: MdlProps) => {
  return (
    <StyledModal
     size={size}
      variant={variant}
      rounded={rounded}
      transparent = {transparent}
      animationType = {animationType}
      visible =  {visible}
      onRequestClose = {onRequestClose}
      onShow = {onShow}
      className={className}
      {...props}
    >
      {children}
    </StyledModal>
  );
};

export default Modal;
