
import type { SelectProps } from "./select.style";
import { StyledSelect } from "./select.style";
import React from "react";

interface SltProps extends SelectProps {
  className?: string;
}

const Select: React.FC<SltProps> = ({
  data,
  className,
  size,
  variant,
  placeholderStyle,
  selectTextStyle,
  searchStyle,
  label,
  labelField,
  value,
  valueField,
  inputSearchStyle,
  onChange,
  rounded,
  placeholder,
  searchPlaceholder,
  ...props
}: SltProps) => {
  return (
    <StyledSelect
      size={size}
      data={data}
      label={label}
      rounded={rounded}
      labelField={labelField}
      valueField={valueField}
      placeholderStyle={placeholderStyle}
      variant={variant}
      selectTextStyle={selectTextStyle}
      searchStyle={searchStyle}
      value={value}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Select;
