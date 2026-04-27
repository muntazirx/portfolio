"use client";

import Script from "next/script";
import { analytics } from "@/data/site";

export default function Analytics() {
  const code = analytics.goatcounterCode?.trim();
  if (!code) return null;

  const endpoint = `https://${code}.goatcounter.com/count`;

  return (
    <Script
      id="goatcounter"
      data-goatcounter={endpoint}
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
      async
    />
  );
}
