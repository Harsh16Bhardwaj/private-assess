import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function ReadinessPage() {
  return <main className="screen readiness-screen"><Header /><section className="readiness-content"><h1>Get ready for your assessment</h1><p>Complete these quick checks before you start. Nothing on this page is scored.</p><div className="readiness-list"><article><b>1</b><div><strong>Review and consent</strong><small>Confirm the assessment rules and consent to activity recording.</small></div><span>✓</span></article><article><b>2</b><div><strong>Check your device and environment</strong><small>Use a quiet room, stable connection, and supported browser.</small></div><span>✓</span></article><article className="readiness-active"><b>3</b><div><strong>Try the workspace</strong><small>Run the sample code so you know the editor and test runner.</small><pre>{`print("ready")\nconsole.log("ready")`}</pre></div><Button variant="ghost">Run sample</Button></article></div><a href="/welcome"><Button>Start assessment</Button></a></section></main>;
}
