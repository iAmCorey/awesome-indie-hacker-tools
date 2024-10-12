"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <a
      href="https://github.com/iamcorey/awesome-indie-hacker-tools"
      target="_blank"
      rel="noreferrer"
    >
      <div className="fixed overflow-hidden animate-in slide-in-from-bottom-full z-50 bottom-2 md:bottom-4 right-2 md:right-4 w-[calc(100vw-16px)] max-w-[350px] border border-border p-4 transition-all bg-background h-[75px] group">
        
        <div className="flex justify-between">
          <div className="flex flex-col space-y-0.5">
            <div className="flex space-x-2 items-center">
              <span className="text-sm font-medium">Go to this repository</span>
            </div>
            <p className="text-xs text-[#878787]">
              Find the best tools for indie hackers.
              <span className="text-xs text-[#878787] ml-2">↗</span>
            </p>
          </div>

          <button
            type="button"
            className="absolute right-1.5 top-1.5 text-[#878787] hidden group-hover:block"
            onClick={handleClose}
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </a>
  );
}
