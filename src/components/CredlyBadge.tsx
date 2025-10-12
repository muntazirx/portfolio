"use client";

import Script from "next/script";

type Props = {
  badgeId: string;
  width?: number | string;
  height?: number | string;
  host?: string;
  className?: string;
};

export default function CredlyBadge({
  badgeId,
  width = 150,
  height = 270,
  host = "https://www.credly.com",
  className,
}: Props) {
  return (
    <div className={className}>
      <div
        data-iframe-width={String(width)}
        data-iframe-height={String(height)}
        data-share-badge-id={badgeId}
        data-share-badge-host={host}
      />
      <Script src="//cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />
    </div>
  );
}


