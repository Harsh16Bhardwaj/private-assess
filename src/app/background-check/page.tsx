import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TalentSidebar } from "../../components/TalentSidebar";

const employers = [
  ["Acme Labs", "Apr 2021 – Jul 2024", "Awaiting reply", "12 Aug", "—", "Remind"],
  ["Northern Cloud", "Jan 2019 – Mar 2021", "Verified", "11 Aug", "Match", "Sent"],
  ["Orion Systems", "Jul 2017 – Dec 2018", "Awaiting reply", "12 Aug", "—", "Remind"],
];

export default function BackgroundCheckPage() {
  return (
    <main className="screen talent-screen">
      <Header title="Talent operations" />
      <div className="talent-layout">
        <TalentSidebar active="Background checks" />

        <section className="talent-content">
          <header className="talent-page-header">
            <div>
              <h1>Anjali Mehta</h1>
              <p>Background check · Selected from Senior Frontend Engineer assessment · Started 12 Aug</p>
            </div>
          </header>

          <section className="talent-status-bar">
            <div>
              <span>CHECK STATUS</span>
              <strong>In progress⌄</strong>
            </div>
            <Button variant="ghost">Send reminder</Button>
          </section>

          <section className="talent-card">
            <h2>Candidate documents</h2>
            <p>Employers receive an email to confirm dates, designation, reason for leaving, and rehire eligibility.</p>
            <div className="talent-documents">
              <label>
                RELIEVING LETTER
                <input readOnly value="Uploaded · 12 Aug 2026" />
              </label>
              <label>
                PAYSLIPS
                <input readOnly value="2 of 3 months uploaded" />
              </label>
              <Button variant="ghost">Upload docs</Button>
            </div>
          </section>

          <section className="talent-table-section">
            <h2>Employer verification</h2>
            <div className="talent-table-wrap">
              <table className="talent-table">
                <thead>
                  <tr><th>Employer</th><th>Status</th><th>Requested</th><th>Outcome</th><th>Reminder</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {employers.map(([company, dates, status, requested, outcome, reminder]) => (
                    <tr key={company}>
                      <td><strong>{company}</strong><small>{dates}</small></td>
                      <td><span className={`status-pill ${status === "Verified" ? "verified" : "pending"}`}>{status}</span></td>
                      <td>{requested}</td>
                      <td><strong>{outcome}</strong></td>
                      <td><a href="#">↗ {reminder}</a></td>
                      <td><a href="#">✉ Open</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
