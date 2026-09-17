import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { TalentSidebar } from "../../../components/TalentSidebar";

const questions = [
  ["01", "Build an accessible modal", "React · Medium · 15 min", "10 pts"],
  ["02", "Investigate a layout shift", "Debugging · Medium · 20 min", "10 pts"],
  ["03", "Improve a responsive data table", "CSS · Medium · 15 min", "10 pts"],
  ["04", "Review a pull request", "Code review · Medium · 10 min", "10 pts"],
];

export default function AssessmentDetailPage() {
  return <main className="screen talent-screen"><Header title="Senior Frontend Engineer" /><div className="talent-layout"><TalentSidebar active="All Assessments" /><section className="talent-content">
    <a className="back-link" href="/interviewer/assessments">← All assessments</a>
    <header className="talent-page-header"><div><span className="section-label">ASSESSMENT</span><h1>Senior Frontend Engineer</h1><p>Assess practical React implementation and accessible component decisions.</p></div><div className="header-actions"><Button variant="ghost">Edit assessment</Button><Button variant="ghost">Schedule end</Button><Button>End assessment</Button></div></header>
    <section className="overview-strip"><span>QUESTIONS<strong>4</strong></span><span>CANDIDATES<strong>12</strong></span><span>COMPLETED<strong>9</strong></span><span>DURATION<strong>60 min</strong></span></section>
    <div className="assessment-detail-grid"><section className="question-set"><div className="section-row"><h2>Question set</h2><span>4 questions · 40 points</span></div>{questions.map(([num,title,meta,points]) => <article key={num}><b>{num}</b><div><strong>{title}</strong><small>{meta}</small></div><span>{points}</span></article>)}</section>
    <aside className="progress-card"><div className="section-row"><h2>Candidate progress</h2><button>View candidates</button></div><strong>9 of 12 candidates have completed the assessment</strong><div className="progress-track"><span /></div><small>RECENT ACTIVITY</small><p>• Priya N. completed the assessment · 12 min ago</p><p>• 2 invitations were accepted · 1 hour ago</p><div className="deadline-card"><strong>Assessment closes in 2 days</strong><span>Friday, 25 July · 18:00</span></div><div className="two-actions"><Button>Invite candidates</Button><Button variant="ghost">Review results</Button></div></aside></div>
  </section></div></main>;
}
