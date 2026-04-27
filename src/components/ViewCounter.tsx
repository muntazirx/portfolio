"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { analytics } from "@/data/site";

type Props = {
  slug: string;
};

export default function ViewCounter({ slug }: Props) {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    const code = analytics.goatcounterCode?.trim();
    if (!code) return;

    const controller = new AbortController();
    // GoatCounter public counter API: paths are appended after /counter/
    // and start with a leading "/", so the URL contains a double slash.
    // Docs: https://www.goatcounter.com/help/counter
    const url = `https://${code}.goatcounter.com/counter//blog/${slug}.json`;

    fetch(url, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count?: string } | null) => {
        if (data?.count) setCount(data.count);
      })
      .catch(() => {
        // Silently ignore: site may be unreachable or public stats disabled.
      });

    return () => controller.abort();
  }, [slug]);

  if (!count) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded border border-foreground/15 px-2 py-1"
      title={`${count} views`}
    >
      <Eye className="h-3 w-3" aria-hidden="true" />
      <span>{count} views</span>
    </span>
  );
}
