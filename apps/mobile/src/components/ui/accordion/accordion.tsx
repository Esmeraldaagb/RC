import type { AccordionProps } from "./accordion.style";
import { StyledAccordion } from "./accordion.style";

interface AcdProps extends AccordionProps {
  className?: string;
}

const Accordion: React.FC<AcdProps> = ({
  size = "small",
  variant = "primary",
  title,
  content,
  className,
  ...props
}: AcdProps) => {
  return (
    <StyledAccordion
      size={size}
      variant={variant}
      className={className}
      title={title}
      content={content}
      {...props}
    >
    </StyledAccordion>
  );
};

export default Accordion;
