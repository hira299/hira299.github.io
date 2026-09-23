import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

const proof = ["28K+ records in production", "678+ QA defects documented", "LangGraph · CRAG · n8n"];

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ece8f7",
          backgroundColor: "#0d0a17",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(139,92,246,0.4), transparent 55%), radial-gradient(circle at 100% 100%, rgba(196,181,253,0.2), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 28, letterSpacing: 4, color: "#c4b5fd", textTransform: "uppercase" }}>
              {profile.careerRole}
            </div>
            <div style={{ fontSize: 26, color: "#c4b5fd" }}>hira299.github.io</div>
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, marginTop: 12, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, marginTop: 8, color: "#d9d2f2" }}>{profile.role}</div>
          <div style={{ fontSize: 28, marginTop: 20, color: "#a9a1c2" }}>{profile.positioning}</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", gap: 16 }}>
            {proof.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  fontSize: 24,
                  padding: "10px 18px",
                  border: "1px solid rgba(196,181,253,0.45)",
                  borderRadius: 999,
                  color: "#ece8f7",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
