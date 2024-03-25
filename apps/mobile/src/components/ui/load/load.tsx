import type { LoadProps } from "./load.style";
import { StyledLoad } from "./load.style";

interface LdProps extends LoadProps {
    className?: string;
    onRefresh?:any;
   
}
const Load = ({
    size = "small",
    className,
    refreshing,
    ...props
}: LdProps)  => {
  return (
    <StyledLoad
        size={size}
        className={className}
        refreshing={refreshing}
        {...props}
    />
  );
};

export default Load;
