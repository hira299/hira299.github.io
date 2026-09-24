import { Arrow, Box, DiagramFrame, Group, Note } from "./primitives";

const id = "sentinel-mesh";

export function SentinelMeshDiagram() {
  return (
    <DiagramFrame
      id={id}
      width={960}
      height={600}
      title="Sentinel-Mesh closed-loop remediation and evaluation"
      description="A Terraform configuration is parsed to JSON with python-hcl2 and checked by a Z3 SMT verifier against Cloud Perimeter Model invariants. Secure configurations stop there. On a violation, an LLM remediation agent rotating across Cerebras, Gemini, and Groq proposes a patch, which is extracted, re-parsed, and checked by a dual-solver Z3 patch proof: one solver confirms the patched configuration satisfies the modeled invariants, the other that it cannot retain the original violation. Rejections are fed back to the LLM for up to five attempts. An experiment runner evaluates the loop on 105 CloudFix-Bench cases alongside a Checkov baseline, a no-witness ablation, and a 12-case external set."
      caption={
        <>
          <strong>Simplified view</strong> of the Sentinel-Mesh loop. The LLM only proposes patches; a patch is accepted
          when Z3 confirms it satisfies the modeled invariants. A pass is formal within the Cloud Perimeter Model scope,
          not a claim of overall security.
        </>
      }
    >
      <Box x={24} y={24} w={200} h={72} title="Terraform config" sub="CloudFix-Bench case" tone="data" />
      <Box x={262} y={24} w={200} h={72} title="HCL parser" sub="python-hcl2 → JSON" />
      <Box x={500} y={24} w={220} h={72} title="Z3 SMT verifier" sub={"Cloud Perimeter Model\ninvariants"} tone="ai" />
      <Box x={760} y={24} w={176} h={72} title="Already secure" sub="no patch needed" tone="ok" />
      <Arrow id={id} d="M224 60 H258" />
      <Arrow id={id} d="M462 60 H496" />
      <Arrow id={id} d="M720 60 H756" tone="ok" />

      <Group x={24} y={140} w={912} h={200} label="" tone="ai" />
      <Note x={920} y={164} anchor="end" text="Closed repair loop · up to 5 attempts" />
      <Arrow id={id} d="M610 96 V118 H168 V186" tone="warn" label="violation" labelX={390} labelY={112} />

      <Box x={48} y={190} w={240} h={80} title="LLM remediation agent" sub={"Cerebras · Gemini · Groq\nprovider rotation"} tone="ai" />
      <Box x={360} y={190} w={220} h={80} title="Candidate HCL patch" sub={"extracted from fenced block\nre-parsed to JSON"} />
      <Box x={652} y={190} w={260} h={80} title="Dual-solver patch proof" sub={"Solver A: invariants satisfied\nSolver B: violation eliminated"} tone="ai" />
      <Arrow id={id} d="M288 230 H356" />
      <Arrow id={id} d="M580 230 H648" />
      <Arrow
        id={id}
        d="M720 270 V304 H200 V274"
        tone="warn"
        dashed
        label="rejected · verdict fed back"
        labelX={460}
        labelY={324}
      />

      <Box x={48} y={372} w={240} h={64} title="Persistent failure" sub="no verified patch in 5 attempts" tone="warn" />
      <Box x={652} y={372} w={260} h={64} title="Fixed" sub="verified patch accepted" tone="ok" />
      <Arrow id={id} d="M120 340 V368" tone="warn" />
      <Arrow id={id} d="M850 270 V368" tone="ok" label="pass" labelX={874} labelY={322} />

      <Group x={24} y={462} w={912} h={118} label="Evaluation" />
      <Box x={48} y={498} w={260} h={64} title="Experiment runner" sub="105 CloudFix-Bench cases" tone="data" />
      <Box x={340} y={498} w={300} h={64} title="Baselines & ablation" sub={"Checkov · no-witness ablation\nexternal set (12 cases)"} />
      <Box x={672} y={498} w={240} h={64} title="Results" sub="Wilson 95% intervals" tone="data" />
      <Arrow id={id} d="M308 530 H336" />
      <Arrow id={id} d="M640 530 H668" />
    </DiagramFrame>
  );
}
