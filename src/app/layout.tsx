import type { Metadata } from "next";
import BackNavigation from "../components/BackNavigation";
import "./styles.css";

export const metadata: Metadata = {
  title: "InterviewOS",
  description: "Candidate interview and assessment workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackNavigation />
      </body>
    </html>
  );
}
