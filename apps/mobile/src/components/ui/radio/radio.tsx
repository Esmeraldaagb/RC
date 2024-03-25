import type { RadioProps } from "./radio.style";
import { StyledRadio } from "./radio.style";

interface RdProps extends RadioProps {
    className?: string;
    trackColor?:object;
    thumbColor?:string;
    ios_backgroundColor?:string;
    onValueChange?:any;
    disabled?:boolean;
    value?:boolean
}

const Radio = ({
    size = "small",
    className,
    trackColor,
    thumbColor,
    ios_backgroundColor,
    onValueChange,
    disabled,
    value,
    ...props
}: RdProps) => {
  return (
    <StyledRadio
        size={size}
        className={className}
        trackColor={trackColor}
        thumbColor={thumbColor}
        ios_backgroundColor={ios_backgroundColor}
        onValueChange = {onValueChange}
        disabled = {disabled}
        value = {value}
        {...props}
    />
  );
};

export default Radio;
