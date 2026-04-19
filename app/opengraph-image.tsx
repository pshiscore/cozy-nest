import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#f0ece4",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Decorative blob top-right */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "#e8e2d9",
            opacity: 0.7,
          }}
        />
        {/* Decorative blob bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "#b8c8b0",
            opacity: 0.4,
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 80,
            width: 56,
            height: 56,
            borderRadius: 28,
            background: "#3d5c44",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f0ece4",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 24,
          }}
        >
          cn
        </div>

        {/* Studio name */}
        <div
          style={{
            position: "absolute",
            top: 76,
            left: 152,
            color: "#3d5c44",
            fontFamily: "Georgia, serif",
            fontSize: 18,
            letterSpacing: "0.05em",
          }}
        >
          Cozy Nest by Lidia
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#3d5c44",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 80,
            lineHeight: 1.1,
            marginBottom: 28,
            maxWidth: 800,
          }}
        >
          Come home to calm.
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#7a9478",
            fontFamily: "Georgia, serif",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Home Resets · Northville, MI
        </div>
      </div>
    ),
    { ...size }
  );
}
