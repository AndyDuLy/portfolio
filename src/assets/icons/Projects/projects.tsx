import { SVGProps } from "react";

interface ProjectProps {
  props?: SVGProps<SVGSVGElement>;
  width?: number | string;
  height?: number | string;
}

export const CameraOutline: React.FC<ProjectProps> = ({
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
      <g fill="none">
        <path d="M44 26c0 2.64-.73 5.108-2 7.215A14.1 14.1 0 0 1 37.215 38c-2.107 1.27-4.576 2-7.215 2s-5.108-.73-7.215-2C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12c2.107-1.27 4.576-2 7.215-2s5.108.73 7.215 2A14.1 14.1 0 0 1 42 18.785c1.27 2.107 2 4.576 2 7.215"></path>
        <path d="M4 14v24h18.785C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M37.215 14c-2.107-1.27-4.576-2-7.215-2s-5.108.73-7.215 2m14.43 0H42v4.785M37.215 14A14.1 14.1 0 0 1 42 18.785M22.785 14H4v24h18.785m0-24C18.719 16.45 16 20.907 16 26s2.72 9.55 6.785 12m14.43 0c-2.107 1.27-4.576 2-7.215 2s-5.108-.73-7.215-2m14.43 0H42v-4.785M37.215 38A14.1 14.1 0 0 0 42 33.215m0-14.43c1.27 2.107 2 4.576 2 7.215s-.73 5.108-2 7.215M8 9h9v5H8zm2 13v8m26-4a6 6 0 0 1-6 6m-6-6a6 6 0 0 1 6-6"
        ></path>
      </g>
    </svg>
  );
};

export const WeatherOutline: React.FC<ProjectProps> = ({
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
        fill="currentColor"
        d="m10 37.763l-.156.084a1.25 1.25 0 0 1-1.197-2.195c2.982-1.627 5.664-2.006 8.319-1.516c2.585.478 5.062 1.769 7.657 3.283c4.752 2.771 10.291 2.031 13.395-.186a1.25 1.25 0 1 1 1.453 2.034c-3.895 2.783-10.496 3.584-16.107.311c-2.587-1.509-4.734-2.592-6.852-2.983c-2.007-.37-4.064-.131-6.512 1.168m26-2.78q.298-.095.587-.203a12.4 12.4 0 0 0 2.887-1.513a1.25 1.25 0 1 0-1.453-2.034c-3.104 2.217-8.643 2.957-13.395.186c-2.595-1.514-5.072-2.805-7.658-3.283c-2.655-.49-5.336-.11-8.32 1.516a1.25 1.25 0 0 0 1.198 2.195c2.517-1.373 4.62-1.63 6.668-1.252c2.118.391 4.266 1.474 6.852 2.983c4.17 2.433 8.887 2.615 12.634 1.406m-22.903-10.37a8.7 8.7 0 0 1 2.496-.144q.464.041.924.126c2.118.391 4.265 1.475 6.852 2.983c5.611 3.273 12.212 2.472 16.108-.311a1.25 1.25 0 1 0-1.453-2.034c-3.105 2.217-8.644 2.957-13.396.186c-2.595-1.514-5.072-2.805-7.657-3.283c-2.655-.49-5.337-.11-8.32 1.516a1.25 1.25 0 0 0 1.198 2.195c1.159-.632 2.23-1.028 3.248-1.234M32.42 24q0 .331-.025.656a10 10 0 0 0 2.525-.589V24c0-6.03-4.888-10.92-10.92-10.92a10.92 10.92 0 0 0-9.932 6.379q1.386-.078 2.765.122A8.42 8.42 0 0 1 32.419 24m-8.345 20a1 1 0 0 1-.164 0zM11.607 9.895l-.101-.09a1.25 1.25 0 0 0-1.667 1.858l2.148 2.148l.102.09a1.25 1.25 0 0 0 1.666-1.858zm26.628 1.666a1.25 1.25 0 0 0-1.859-1.666l-2.148 2.148l-.09.102a1.25 1.25 0 0 0 1.858 1.666l2.148-2.148zM25.244 5.12a1.25 1.25 0 0 0-2.494.128v3.038l.007.127a1.25 1.25 0 0 0 2.493-.127V5.247z"
      ></path>
    </svg>
  );
};

export const ImagesOutline: React.FC<ProjectProps> = ({
  props,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width ?? "24px"}
      height={height ?? "24px"}
      {...props}
    >
      <path
        d="M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1z"
        fill="currentColor"
      ></path>
      <path
        d="M367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 00-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4z"
        fill="currentColor"
      ></path>
      <path
        d="M378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z"
        fill="currentColor"
      ></path>
      <path
        d="M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const DirectionsOutline: React.FC<ProjectProps> = ({
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
        d="M10 12h3.5v1.3q0 .35.3.475t.55-.125l1.95-1.95q.3-.3.3-.7t-.3-.7l-1.95-1.95q-.25-.25-.55-.125t-.3.475V10H9q-.425 0-.712.288T8 11v3q0 .425.288.713T9 15t.713-.288T10 14zm2 10q-.375 0-.737-.15t-.663-.45l-8-8q-.3-.3-.45-.663T2 12t.15-.737t.45-.663l8-8q.3-.3.663-.45T12 2t.738.15t.662.45l8 8q.3.3.45.663T22 12t-.15.738t-.45.662l-8 8q-.3.3-.663.45T12 22m-4-6l4 4l8-8l-8-8l-8 8zm4-4"
      ></path>
    </svg>
  );
};
