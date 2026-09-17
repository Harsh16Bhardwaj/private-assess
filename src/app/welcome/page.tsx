import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function WelcomePage() {
  return (
    <main className="screen welcome-screen">
      <Header />

      <section className="welcome-content">
        <article className="welcome-card">
          <span className="tag">Assessment</span>
          <h2>Welcome to your assessment</h2>
          <p className="lead">
            You’ll complete one coding challenge and a few short questions. Take a moment to review
            the details before you begin.
          </p>

          <dl className="metrics">
            <div>
              <dt>SECTIONS</dt>
              <dd>4</dd>
            </div>
            <div>
              <dt>CODE</dt>
              <dd>1 challenge</dd>
            </div>
            <div>
              <dt>WRITING</dt>
              <dd>1 answer</dd>
            </div>
          </dl>

          <div className="card-footer">
            <p>Your progress is saved automatically.</p>
            <Link href="/questions">
              <Button>Start assessment</Button>
            </Link>
          </div>
        </article>

        <aside className="sidebar-note">
          <div>
            <p className="eyebrow">TIMEBOX</p>
            <strong>2 hours</strong>
            <p>Plan your time across the coding and written sections.</p>
          </div>

          <div>
            <h3>Before you begin</h3>
            <ul>
              <li>Use a stable internet connection</li>
              <li>Keep this browser tab open</li>
              <li>Review answers before submitting</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
