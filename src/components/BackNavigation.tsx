"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BackNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  function goBack() {
    const referrer = document.referrer ? new URL(document.referrer) : null;

    if (referrer?.origin === window.location.origin && referrer.href !== window.location.href) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button className="global-back-button" type="button" onClick={goBack} aria-label="Go back to the previous page">
      <span aria-hidden="true">←</span>
      Back
    </button>
  );
}
