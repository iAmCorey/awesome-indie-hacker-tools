"use client";

import { ExternalLinkIcon } from "lucide-react";

export function VisitButton({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center"
    >
      <ExternalLinkIcon className="w-4 h-4" />
    </a>
  );
}
