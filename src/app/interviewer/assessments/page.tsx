import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { TalentSidebar } from "../../../components/TalentSidebar";

const assessments = [
  ["Data Scientist", "Python · 7 questions · 90 min", "30 candidates", "20 / 30 complete", "In progress"],
  ["Data Analyst", "SQL · 3 questions · 60 min", "15 candidates", "10 / 15 complete", "Paused"],
  ["Product Manager", "Agile · 5 questions · 60 min", "20 candidates", "12 / 20 complete", "In progress"],
  ["UX Designer", "User Research · 4 questions · 45 min", "18 candidates", "18 / 18 complete", "Completed"],
  ["Software Engineer", "JavaScript · 6 questions · 70 min", "25 candidates", "0 / 25 complete", "Pending"],
  ["Senior Frontend Engineer", "React · 4 questions · 60 min", "12 candidates", "9 / 12 complete", "Closes in 2 days"],
  ["Marketing Specialist", "SEO · 3 questions · 30 min", "15 candidates", "5 / 15 complete", "Paused"],
];

export default function AssessmentsPage() {
  return <main className="screen talent-screen"><Header title="Assessments" /><div className="talent-layout"><TalentSidebar active="All Assessments" /><section className="talent-content">
    <header className="talent-page-header"><div><span className="section-label">ASSESSMENTS</span><h1>All assessments</h1><p>Create, monitor, and review every hiring assessment.</p></div><a href="/interviewer/create"><Button>Create new assessment</Button></a></header>
    <div className="assessment-summary"><article><span>LIVE</span><strong>8</strong><small>2 close this week</small></article><article><span>DRAFTS</span><strong>3</strong><small>12 questions in progress</small></article><article><span>AWAITING REVIEW</span><strong>5</strong><small>Prioritise today</small></article></div>
    <div className="filter-row"><input placeholder="Search assessments" /><button>All statuses⌄</button><button>All owners⌄</button><button>Last updated⌄</button></div>
    <div className="section-row"><h2>Assessment list</h2><span>{assessments.length} assessments</span></div>
    <div className="assessment-list">{assessments.map(([name, detail, candidates, progress, status]) => <article key={name}><div><strong>{name}</strong><small>{detail}</small></div><span>{candidates}</span><span>{progress}</span><span>{status}</span><a href="/interviewer/assessment">Open</a></article>)}</div>
  </section></div></main>;
}
