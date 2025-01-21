import { SVGProps } from "react";

interface NavbarIconProps {
  props?: SVGProps<SVGSVGElement>;
  width?: number | string;
  height?: number | string;
}

export const HomeOutline: React.FC<NavbarIconProps> = ({
  props,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ?? "24px"}
      height={height ?? "24px"}
      {...props}
    >
      <g className="home-outline">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.033 2.883a3 3 0 0 1 3.934 0l7 6.076A3 3 0 0 1 22 11.225V19a3 3 0 0 1-3 3h-3.5a1.5 1.5 0 0 1-1.5-1.5v-6.813h-4V20.5A1.5 1.5 0 0 1 8.5 22H5a3 3 0 0 1-3-3v-7.775a3 3 0 0 1 1.033-2.266zm2.623 1.51a1 1 0 0 0-1.312 0l-7 6.077a1 1 0 0 0-.344.755V19a1 1 0 0 0 1 1h3v-6.313a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V20h3a1 1 0 0 0 1-1v-7.775a1 1 0 0 0-.345-.755z"
          className="Vector (Stroke)"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export const WorkOutline: React.FC<NavbarIconProps> = ({
  props,
  width,
  height,
}) => {
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

export const ProjectOutline: React.FC<NavbarIconProps> = ({
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
        stroke="#9B9B9B"
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

export const ContactOutline: React.FC<NavbarIconProps> = ({
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
