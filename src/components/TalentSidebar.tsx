type TalentSidebarProps = {
  active: "Dashboard" | "All Assessments" | "Candidates" | "Results" | "Background checks";
};

const items = [
  ["Dashboard", "/interviewer/dashboard"],
  ["All Assessments", "/interviewer/assessments"],
  ["Candidates", "/interviewer/assessment"],
  ["Background checks", "/background-check"],
  ["Results", "/interviewer"],
  ["Question Bank", "/interviewer/create"],
];

export function TalentSidebar({ active }: TalentSidebarProps) {
  return (
    <aside className="talent-sidebar">
      <p className="talent-kicker">HIRING WORKSPACE</p>
      <nav aria-label="Hiring workspace">
        {items.map(([item, href]) => (
          <a className={item === active ? "active" : ""} href={href} key={item}>
            <span />
            {item}
          </a>
        ))}
      </nav>
      <div className="talent-profile">
        <div className="talent-profile-avatar" />
        <div>
          <strong>Maya Chen</strong>
          <small>Talent lead</small>
        </div>
      </div>
    </aside>
  );
}
