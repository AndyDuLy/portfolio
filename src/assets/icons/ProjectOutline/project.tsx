import { SVGProps } from "react";

interface ProjectOutlineProps {
  props?: SVGProps<SVGSVGElement>;
  width?: number | string;
  height?: number | string;
}

const ProjectOutline: React.FC<ProjectOutlineProps> = ({
  props,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width ?? "24px"}
      height={height ?? "24px"}
      {...props}
    >
      <g
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M21 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V21"></path>
        <path d="M24 34V42"></path>
        <path d="M32 6L28 10L32 14"></path>
        <path d="M38 6L42 10L38 14"></path>
        <path d="M14 42L34 42"></path>
      </g>
    </svg>
  );
};

export default ProjectOutline;
