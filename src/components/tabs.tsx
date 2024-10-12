"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const tabs = [
  {
    name: "All",
    path: "/",
  },
  {
    name: "Popular",
    path: "/popular",
  },
  // {
  //   name: "New",
  //   path: "/new",
  // },
];

export function Tabs() {
  const selectedTab = usePathname();

  return (
    <div className="flex items-center">
      {tabs.map((tab) => (
        <Link href={tab.path} key={tab.name}>
          <Button
            variant="ghost"
            className={cn(
              "px-4 py-0 h-8 text-gray-800 bg-gray-200",
              selectedTab === tab.path && "bg-gray-500 text-white",
            )}
          >
            {tab.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
