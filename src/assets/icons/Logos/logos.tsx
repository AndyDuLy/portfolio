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

export const GithubOutline: React.FC<CompanyLogoProps> = ({
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
        fillRule="evenodd"
        d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const LinkedinOutline: React.FC<CompanyLogoProps> = ({
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
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
          clipRule="evenodd"
        ></path>
        <path d="M7.2 8.809H4V19.5h3.2z"></path>
      </g>
    </svg>
  );
};

export const ResumeOutline: React.FC<CompanyLogoProps> = ({
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
      <g className="document-texts-outline">
        <g
          fill="currentColor"
          fillRule="evenodd"
          className="Vector"
          clipRule="evenodd"
        >
          <path d="M3 9.612c0-1.563 1.333-2.72 2.837-2.72H9v2H5.837c-.525 0-.837.383-.837.72v9.56c0 .337.312.72.837.72h6.326c.525 0 .837-.383.837-.72v-.288h2v.287c0 1.563-1.333 2.72-2.837 2.72H5.837C4.333 21.892 3 20.735 3 19.172z"></path>
          <path d="M17.2 19h-5.4C9.643 19 8 17.214 8 15.143V5.857C8 3.787 9.643 2 11.8 2h3.022c.867 0 1.703.322 2.347.903l2.675 2.415A3.5 3.5 0 0 1 21 7.918v7.225C21 17.213 19.357 19 17.2 19m0-2h-5.4c-.994 0-1.8-.831-1.8-1.857V5.857C10 4.831 10.806 4 11.8 4h3.022c.372 0 .73.138 1.007.387l2.675 2.416A1.5 1.5 0 0 1 19 7.918v7.225C19 16.169 18.194 17 17.2 17"></path>
          <path d="M11 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4-12a1 1 0 0 1 1 1v1.997C16 6.551 16.449 7 17.003 7H19a1 1 0 1 1 0 2h-1.997A3.003 3.003 0 0 1 14 5.997V4a1 1 0 0 1 1-1"></path>
        </g>
      </g>
    </svg>
  );
};

export const MediumOutline: React.FC<CompanyLogoProps> = ({
  props,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={width ?? "24px"}
      height={height ?? "24px"}
      {...props}
    >
      <path
        fill="currentColor"
        d="M52 136a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h12V60H24a4 4 0 0 1 0-8h16a4 4 0 0 1 3.39 1.87L80 112.45l36.61-58.57A4 4 0 0 1 120 52h16a4 4 0 0 1 0 8h-12v72h12a4 4 0 0 1 0 8h-24a4 4 0 0 1 0-8h4V70l-32.61 52.12a4 4 0 0 1-6.78 0L44 70v62h4a4 4 0 0 1 4 4m116-28h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"
      ></path>
    </svg>
  );
};
