import Link from "next/link";
import { Button } from "./Button";

type AuthShellProps = {
  mode: "sign-in" | "create-account" | "forgot-password" | "reset-password" | "check-email";
};

const copy = {
  "sign-in": {
    title: "Welcome back",
    subtitle: "Sign in to continue to your interview workspace.",
    fields: ["EMAIL", "PASSWORD"],
    button: "Sign in",
    helper: "Forgot password?",
    footer: "New to InterviewOS? Create account",
  },
  "create-account": {
    title: "Create your account",
    subtitle: "Set up your candidate profile to begin.",
    fields: ["FULL NAME", "EMAIL", "PASSWORD"],
    button: "Create account",
    helper: "Use at least 8 characters",
    footer: "Already have an account? Sign in",
  },
  "forgot-password": {
    title: "Forgot password?",
    subtitle: "Enter your email and we’ll send you a reset link.",
    fields: ["EMAIL"],
    button: "Send reset link",
    helper: "",
    footer: "Return to login",
  },
  "reset-password": {
    title: "Choose new password",
    subtitle: "Choose a secure password for your account.",
    fields: ["PASSWORD", "REPEAT PASSWORD"],
    button: "Save password",
    helper: "Use at least 8 characters",
    footer: "Back to login",
  },
  "check-email": {
    title: "Check your email",
    subtitle: "We sent a password reset link to your inbox.",
    fields: [],
    button: "Back to sign in",
    helper: "",
    footer: "Didn’t receive it? Resend email",
  },
};

export function AuthShell({ mode }: AuthShellProps) {
  const data = copy[mode];

  return (
    <main className="auth-screen">
      <aside className="auth-visual">
        <div className="auth-brand">
          <span className="brand-icon">IO</span>
          <span>InterviewOS</span>
          <small>CANDIDATE PLATFORM</small>
        </div>
        <p>
          A focused interview experience designed to help you do your best work.
        </p>
      </aside>

      <section className={`auth-panel auth-${mode}`}>
        <form className="auth-form">
          {mode === "check-email" ? <div className="email-icon">✉</div> : null}
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>

          {data.fields.map((field) => (
            <label key={field}>
              {field}
              <input
                type={field.includes("PASSWORD") ? "password" : "text"}
                placeholder={field === "FULL NAME" ? "Your name" : field.includes("PASSWORD") ? "••••••••" : "name@example.com"}
              />
            </label>
          ))}

          {data.helper ? <Link href="/auth/forgot-password">{data.helper}</Link> : null}
          <Button>{data.button}</Button>
          <Link href="/auth/sign-in">{data.footer}</Link>
        </form>
      </section>
    </main>
  );
}
