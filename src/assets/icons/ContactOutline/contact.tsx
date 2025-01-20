import { SVGProps } from "react";

interface ContactOutlineProps {
  props?: SVGProps<SVGSVGElement>;
  width?: number | string;
  height?: number | string;
}

const ContactOutline: React.FC<ContactOutlineProps> = ({
  props,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width={width ?? "24px"}
      height={height ?? "24px"}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 8L.5 5.5l13-5l-5 13zm0 0l3-3"
      ></path>
    </svg>
  );
};

export default ContactOutline;
