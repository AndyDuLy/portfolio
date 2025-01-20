import { SVGProps } from "react";

interface WorkOutlineProps {
  props?: SVGProps<SVGSVGElement>;
  width?: number | string;
  height?: number | string;
}

const WorkOutline: React.FC<WorkOutlineProps> = ({ props, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ?? "24px"}
      height={height ?? "24px"}
      {...props}
    >
      <path
        fill="currentColor"
        d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"
      ></path>
    </svg>
  );
};

export default WorkOutline;
