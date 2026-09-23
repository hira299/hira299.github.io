import { DiagramFrame, Note } from "./primitives";

const id = "qa-coverage";

const groups = ["Order to delivery", "Payments", "Returns", "Security"];
const personas: { name: string; counts: number[] }[] = [
  { name: "Pharmacy manager", counts: [1, 1, 1, 0] },
  { name: "Distributor manager", counts: [4, 3, 2, 2] },
  { name: "Driver", counts: [1, 0, 1, 1] },
  { name: "All roles (sweeps)", counts: [0, 0, 0, 3] },
];
const totals = [6, 4, 4, 6];

const severity = [
  { label: "P1", value: 11 },
  { label: "P2", value: 19 },
  { label: "P3", value: 43 },
  { label: "P4", value: 7 },
];
const layers = [
  { label: "Frontend only", value: 58 },
  { label: "Backend only", value: 10 },
  { label: "Both layers", value: 12 },
];

const cellW = 112;
const cellH = 46;
const gridX = 190;
const gridY = 84;

function Bars({ x, y, title, items, max }: { x: number; y: number; title: string; items: { label: string; value: number }[]; max: number }) {
  return (
    <g>
      <text x={x} y={y} className="d-group-label">
        {title}
      </text>
      {items.map((item, index) => {
        const rowY = y + 16 + index * 30;
        return (
          <g key={item.label}>
            <text x={x} y={rowY + 15} className="d-sub" textAnchor="start">
              {item.label}
            </text>
            <rect x={x + 96} y={rowY + 3} width={(item.value / max) * 150} height={16} rx={5} className="d-bar" />
            <text x={x + 102 + (item.value / max) * 150} y={rowY + 16} className="d-sub" textAnchor="start">
              {item.value}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function QaCoverageDiagram() {
  return (
    <DiagramFrame
      id={id}
      width={960}
      height={344}
      title="QA coverage: journeys by persona, defects by severity and layer"
      description="Twenty journeys across four groups: order to delivery 6, payments and finance 4, returns 4, security and boundaries 6, each run as the persona that performs it. Defects by severity: 11 P1, 19 P2, 43 P3, 7 P4. By layer: 58 frontend only, 10 backend only, 12 in both."
      caption={
        <>
          <strong>Journeys were run as the real persona.</strong> Boundary sweeps covered all roles at once. Recording
          the affected layer separated UI fixes from API-level fixes.
        </>
      }
    >
      <text x={24} y={32} className="d-group-label">
        Journeys by persona
      </text>
      {groups.map((group, col) => (
        <text key={group} x={gridX + col * cellW + cellW / 2} textAnchor="middle" className="d-sub">
          <tspan x={gridX + col * cellW + cellW / 2} y={gridY - 24}>
            {group}
          </tspan>
          <tspan x={gridX + col * cellW + cellW / 2} y={gridY - 9}>
            {totals[col]} journeys
          </tspan>
        </text>
      ))}
      {personas.map((persona, row) => (
        <g key={persona.name}>
          <text x={24} y={gridY + row * cellH + cellH / 2 + 5} className="d-sub" textAnchor="start">
            {persona.name}
          </text>
          {persona.counts.map((count, col) => (
            <g key={col}>
              <rect
                x={gridX + col * cellW + 3}
                y={gridY + row * cellH + 3}
                width={cellW - 6}
                height={cellH - 6}
                rx={8}
                className="d-cell"
                style={{ fillOpacity: count === 0 ? 0.06 : 0.18 + count * 0.18 }}
              />
              <text
                x={gridX + col * cellW + cellW / 2}
                y={gridY + row * cellH + cellH / 2 + 6}
                textAnchor="middle"
                className={count === 0 ? "d-sub" : "d-title"}
              >
                {count === 0 ? "–" : count}
              </text>
            </g>
          ))}
        </g>
      ))}
      <Note x={gridX} y={gridY + 4 * cellH + 26} text="20 journeys · 6 roles · 15 modules" />

      <Bars x={680} y={32} title="Defects by severity" items={severity} max={43} />
      <Bars x={680} y={190} title="Defects by layer" items={layers} max={58} />
    </DiagramFrame>
  );
}
