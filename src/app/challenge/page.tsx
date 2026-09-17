import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function ChallengePage() {
  return (
    <main className="screen challenge-screen">
      <Header showNav />

      <section className="challenge-main">
        <p className="eyebrow">CODING CHALLENGE</p>
        <h1>Generate Parentheses</h1>
        <p>Generate every valid combination of balanced parentheses for a given number of pairs.</p>

        <div className="challenge-layout">
          <article className="brief-card">
            <div className="brief-top">
              <span className="tag tag-warning">Medium</span>
              <strong>20 pts</strong>
            </div>
            <h2>Assignment</h2>
            <p>
              Given n pairs of parentheses, return all valid combinations. Your solution should be
              clear, correct, and easy to explain.
            </p>
            <dl className="facts">
              <div>
                <dt>DURATION</dt>
                <dd>40 mins</dd>
              </div>
              <div>
                <dt>LEVEL</dt>
                <dd>Medium</dd>
              </div>
            </dl>
          </article>

          <aside className="practice-card">
            <h2>Topics</h2>
            <p>This challenge focuses on constructing valid combinations efficiently.</p>
            <ul>
              <li>Backtracking</li>
              <li>Stack patterns</li>
              <li>Input validation</li>
            </ul>
          </aside>
        </div>
      </section>

      <footer className="workspace-footer">
        <p>Your work is saved automatically.</p>
        <span>40 minutes</span>
        <Link href="/workspace">
          <Button>Begin coding</Button>
        </Link>
      </footer>
    </main>
  );
}
