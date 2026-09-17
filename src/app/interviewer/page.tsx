import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TalentSidebar } from "../../components/TalentSidebar";

const candidates = [
  ["Jordan Lee", "jordan.lee@northstar.io", "91%", "Strongest match"],
  ["Rohan Iyer", "rohan.iyer@northstar.io", "85%", "Strong match"],
  ["Anjali Mehta", "anjali.mehta@northstar.io", "80%", "Good match"],
  ["Sean White", "sean.white@northstar.io", "53%", "Mixed signals"],
];

export default function InterviewerPage() {
  return (
    <main className="screen talent-screen">
      <Header />
      <div className="talent-layout">
        <TalentSidebar active="Results" />

        <section className="talent-content interviewer-content">
          <header className="talent-page-header">
            <div>
              <span className="section-label">ASSESSMENT RESULTS</span>
              <h1>Results &amp; hiring recommendation</h1>
              <p>Review the evidence, compare candidates, and move the strongest candidate forward.</p>
            </div>
            <Button>Push result to ATS</Button>
          </header>

          <div className="result-metrics">
            <article className="metric-card green"><span>COMPLETED</span><strong>5 / 5</strong><small>All submissions reviewed</small></article>
            <article className="metric-card coral"><span>AVERAGE SCORE</span><strong>76%</strong><small>Across the assessment</small></article>
            <article className="metric-card orange"><span>TOP SCORE</span><strong>91%</strong><small>Jordan Lee</small></article>
          </div>

          <section className="leaderboard-section">
            <div className="leaderboard-main">
              <h2>Leaderboard</h2>
              <div className="talent-table-wrap">
                <table className="talent-table leaderboard-table">
                  <thead><tr><th>Sl. no</th><th>Candidate</th><th>Score</th><th>Recommendation</th></tr></thead>
                  <tbody>
                    {candidates.map(([name, email, score, recommendation], index) => (
                      <tr className={index === 0 ? "selected-row" : ""} key={name}>
                        <td>{index + 1}</td>
                        <td><strong>{name}</strong><small>{email}</small></td>
                        <td><strong className={index === 0 ? "top-score" : ""}>{score}</strong></td>
                        <td>{recommendation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="recommendation-panel">
              <span>RECOMMENDED HIRE</span>
              <h3>Jordan Lee is ready to move forward.</h3>
              <p>Jordan delivered the strongest submission, pairing clear React architecture with strong debugging and accessibility decisions.</p>
              <ul><li>91% overall score</li><li>Clear problem decomposition</li><li>Strong keyboard and focus handling</li></ul>
            </aside>
          </section>

          <section className="selected-candidate-card">
            <div className="selected-candidate-header">
              <div><span>SELECTED CANDIDATE</span><h3>Jordan Lee · jordan.lee@northstar.io</h3></div>
              <div><Button variant="ghost">Review scorecard</Button><Button>View timeline</Button></div>
            </div>
            <div className="score-grid">
              <div><span>Accessible modal</span><strong>100%</strong><small>React &amp; accessibility</small></div>
              <div><span>Layout shift diagnosis</span><strong>90%</strong><small>Debugging</small></div>
              <div><span>Responsive data table</span><strong>83%</strong><small>UI judgment</small></div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
