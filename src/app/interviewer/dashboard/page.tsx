import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { TalentSidebar } from "../../../components/TalentSidebar";

const recent = [
  ["Senior Frontend Engineer", "12 candidates · closes in 2 days", "Live"],
  ["Product Manager", "8 candidates · 5 complete", "Live"],
  ["Backend Platform Engineer", "Draft · 4 questions ready", "Draft"],
];

export default function InterviewerDashboardPage() {
  return (
    <main className="screen talent-screen">
      <Header />
      <div className="talent-layout">
        <TalentSidebar active="Dashboard" />
        <section className="talent-content">
          <header className="talent-page-header">
            <div><span className="section-label">YOUR HIRING OVERVIEW</span><h1>Interviewer dashboard</h1><p>Keep every assessment, candidate, and decision moving.</p></div>
            <a href="/interviewer/create"><Button>Create assessment</Button></a>
          </header>
          <div className="dashboard-metrics">
            <article><span>ACTIVE ASSESSMENTS</span><strong>8</strong><small>2 closing this week</small></article>
            <article><span>INVITATIONS SENT</span><strong>24</strong><small>6 awaiting response</small></article>
            <article><span>COMPLETION RATE</span><strong>78%</strong><small>Up 6% this month</small></article>
            <article><span>REVIEWS DUE</span><strong>5</strong><small>Prioritise today</small></article>
          </div>
          <div className="dashboard-grid">
            <section>
              <div className="section-row"><h2>Recent assessments</h2><a href="/interviewer/assessments">View all assessments</a></div>
              <div className="recent-list">
                {recent.map(([name, detail, status]) => <article key={name}><div><strong>{name}</strong><small>{detail}</small></div><span className={status === "Live" ? "live-chip" : "draft-chip"}>{status}</span></article>)}
              </div>
            </section>
            <aside className="review-callout"><strong>5 candidate reviews are waiting</strong><p>Start with the Senior Frontend Engineer assessment before the deadline.</p><a href="/interviewer"><Button variant="ghost">Review candidates</Button></a></aside>
          </div>
        </section>
      </div>
    </main>
  );
}
