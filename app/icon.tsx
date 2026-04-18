import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          background: "#3d5c44",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f0ece4",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 14,
          letterSpacing: "-0.5px",
        }}
      >
        cn
      </div>
    ),
    { ...size }
  );
}
