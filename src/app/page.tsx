import Link from "next/link";

const screens = [
  ["/interviewer/dashboard", "Interviewer dashboard"],
  ["/interviewer/assessments", "All assessments"],
  ["/interviewer/assessment", "Assessment details"],
  ["/interviewer/create", "Create assessment with AI"],
  ["/readiness", "Candidate readiness check"],
  ["/welcome", "Candidate assessment welcome"],
  ["/questions", "Candidate assessment question list"],
  ["/challenge", "Candidate challenge overview"],
  ["/workspace", "Candidate coding workspace"],
  ["/background-check", "Background check dashboard"],
  ["/interviewer", "Interviewer results dashboard"],
  ["/auth/sign-in", "Authentication - Sign in"],
  ["/auth/create-account", "Authentication - Create account"],
  ["/auth/forgot-password", "Authentication - Forgot password"],
  ["/auth/reset-password", "Authentication - Reset password"],
  ["/auth/check-email", "Authentication - Check your email"],
];

export default function ScreenIndex() {
  return (
    <main className="screen index-screen">
      <section>
        <p className="eyebrow">INTERVIEWOS · CANDIDATE EXPERIENCE</p>
        <h1>Interview workspace</h1>
        <p>
          Open any screen in the assessment flow to preview the candidate experience.
        </p>
        <div className="screen-list">
          {screens.map(([href, title]) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
