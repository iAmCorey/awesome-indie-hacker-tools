"use client";

import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getToolCategories } from "@/data";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const allCategories = getToolCategories();

export function Menu() {
  const router = useRouter();
  const [categories, setCategories] = useState(allCategories);

  const handleClick = (tag: string) => {
    router.push("/", { scroll: false });

    const element = document.getElementById(tag);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 56,
      behavior: "smooth",
    });

    // Run the handleClick function first
    clearSearch();
  };

  const clearSearch = () => {
    // Clear the search input
    setCategories(allCategories);
  };

  return (
    <aside className="w-64 p-4 flex flex-col">
      {/* Search input */}
      <SearchInput
        onSearch={(term) =>
          // setSections(
          //   allSections.filter((section) =>
          //     section.tag.toLowerCase().includes(term),
          //   ),
          // )
          setCategories(
            allCategories.filter((category) =>
              category.category_item.toLowerCase().includes(term),
            ),
          )
        }
        clearSearch={clearSearch}
      />
      <ScrollArea className="flex-grow">
        <div className="space-y-1">
          {categories.map((category) => (
            <Button
              onClick={() => handleClick(category.category_item)}
              key={category.category_item}
              variant="ghost"
              className="w-full justify-start"
            >
              {category.category_item}
              <span className="ml-auto text-[#878787]">
                {category.tools.length}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <Separator className="my-4" />
      <a
        href="https://github.com/iAmCorey/awesome-indie-hacker-tools/issues/new"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          className="capitalize w-full bg-[#F5F5F3]/30 text-black border border-black rounded-full items-center justify-center gap-2 font-medium hidden md:flex dark:text-white dark:border-white"
          variant="outline"
        >
          <span>Submit</span> <PlusIcon className="w-4 h-4" />
        </Button>
      </a>
    </aside>
  );
}
