import { SVGProps } from "react";

interface CompanyLogoProps {
  props?: SVGProps<SVGSVGElement>;
  width?: number | string;
  height?: number | string;
}

export const WealthsimpleOutline: React.FC<CompanyLogoProps> = ({
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23.928 20.555l6.724 15.237l9.114-18.894q1.455-2.812 3.734-4.568l-8.447-.122c1.567 1.4 4.713 1.878.1 14.248"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m33.93 28.835l-5.112-12.682c-.622-1.633-.356-3.09 2.456-3.9H18.982c2.023 1.2 2.756 2.811 2.9 3.256l2.046 5.035l-4.068 8.469l-5.413-13.515c-.611-1.634.411-3.012 1.823-3.246l-11.77.134c2.7 1.089 2.79 2.511 3.734 4.523l8.353 18.883l3.273-6.78"
      ></path>
    </svg>
  );
};

export const CoinbaseOutline: React.FC<CompanyLogoProps> = ({
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 45.5A21.5 21.5 0 1 1 39.21 8.81L32 16.05A11.25 11.25 0 1 0 32 32h0l7.24 7.24A21.43 21.43 0 0 1 24 45.5"
      ></path>
    </svg>
  );
};

export const ShopifyOutline: React.FC<CompanyLogoProps> = ({
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
        d="M14.9 5.1s-.2.06-.54.17c-.06-.18-.14-.41-.26-.63c-.38-.73-.94-1.11-1.62-1.12c-.05 0-.09 0-.14.01c-.02-.02-.04-.05-.06-.07c-.29-.32-.67-.47-1.12-.46c-.87.03-1.74.66-2.45 1.78c-.5.79-.87 1.78-.98 2.54c-1 .31-1.7.53-1.72.53c-.51.16-.52.18-.59.65c-.05.36-1.37 10.6-1.37 10.6L15.03 21V5.08c-.05 0-.1.01-.13.02m-2.54.79c-.58.18-1.22.38-1.85.57c.18-.69.52-1.37.94-1.82c.16-.17.37-.35.63-.46c.24.51.29 1.22.28 1.71m-1.19-2.31c.2 0 .38.04.53.14c-.24.12-.46.3-.68.53c-.55.59-.98 1.52-1.15 2.41c-.53.16-1.04.32-1.52.47c.3-1.41 1.48-3.51 2.82-3.55m-1.7 7.99c.06.93 2.52 1.14 2.66 3.33c.11 1.72-.91 2.9-2.39 2.99C7.98 18 7 16.96 7 16.96l.37-1.59s.98.74 1.76.69c.51-.03.69-.45.68-.74c-.08-1.22-2.08-1.15-2.2-3.15c-.11-1.69 1-3.39 3.44-3.55c.95-.06 1.43.18 1.43.18l-.56 2.09s-.62-.28-1.36-.24c-1.08.07-1.1.75-1.09.92m3.47-5.86c-.01-.44-.06-1.06-.27-1.59c.66.13.99.87 1.13 1.32c-.25.08-.54.17-.86.27m2.45 15.25l4.56-1.13S17.99 6.57 17.98 6.48s-.09-.14-.16-.15s-1.35-.03-1.35-.03s-.78-.76-1.08-1.05z"
      ></path>
    </svg>
  );
};

export const RBCOutline: React.FC<CompanyLogoProps> = ({
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.53 20.08s5.18-.84 6.22-.84a10.8 10.8 0 0 1 3 .84V15.8h-2.46c-.74 0-1.16 1-2.36 1c-.9 0-2.33-1-2.33-2.07s-.19-2 2-2h5.12V7.57H14V5.5h-2.95A2.9 2.9 0 0 0 8.52 8c0 1.1.71 2.78 2.2 2.78m-5.38 12.8c-.34 2.79.26 4.6 1.66 5.7s8.27 5.72 11.76 8.23a10.3 10.3 0 0 1 3.3 4.21M6.38 12.79c-1.94 3.6-.44 7.2 1.17 8.44S22.6 32 25.3 33.75c4.28 2.85 4.93 8.75 4.93 8.75"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.58 32.5a16.4 16.4 0 0 1 2.84 4.88m-2.84-13.22a16.5 16.5 0 0 1 2.84 4.89m4.71.43A16.2 16.2 0 0 1 22 34.36m-2.22-12.64a14.9 14.9 0 0 1 3.1 4.88"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.58 14.81c.26 1.86 3 3.86 5 5.27c2.21 1.63 7.14 5.15 10 7.17c2 1.46 1.73 5.25 1.73 5.25"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22.67 23.8l7.43-4.46h7.81l4.27 2.52l-2.14 3.42M29.6 39.84c1.41-.55 5.94-1 8.5-1A5.42 5.42 0 0 1 42.18 41"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.48 27.25c1.91-2.15 3.59-3.87 6.83-3.87c3.76 0 8.46 2.69 8.46 8.17a7.88 7.88 0 0 1-4.25 7.32"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M35.89 23.54c1.53 3.86 2 7.3.56 13m-3.71-13a24.9 24.9 0 0 0-1.05 9.31"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M41.62 27.32c-3 .18-11.52.15-11.52.15m12.67 4.08H31.6m10.58 3.63h-7.42m2.99-11.09l.51-1.22l-1.08-1.3m-18.97-14v3.15l-1.75-.68"
      ></path>
    </svg>
  );
};
