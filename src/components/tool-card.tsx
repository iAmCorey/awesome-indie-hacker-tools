import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, generateNameAbbr, isImageUrl } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { ShareButton } from "./share-button";
import { VisitButton } from "./visit-button";

export type ToolType = {
  title?: string;
  category?: string;
  tags?: string[];
  slug: string;
  description: string;
  site: {
    name: string;
    url: string;
    icon: string;
  };
};

export function ToolCard({ tool, isPage }: { tool: ToolType; isPage?: boolean }) {
  return (
    <Card className="bg-background p-4 h-[calc(100vh-32rem)]  flex flex-col">
      <CardHeader className="p-0 space-y-1 mb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md">{tool.site.name}</CardTitle>
          <a href={tool.site.url} target="_blank" rel="noopener noreferrer">
            <Avatar className="size-6">
              {isImageUrl(tool.site.icon) ? (
                <AvatarImage src={tool.site.icon} alt={tool.site.name} />
              ) : (
                // <AvatarFallback>
                //   {generateNameAbbr(tool.site.name)}
                // </AvatarFallback>
                <AvatarImage src={`https://Favicon.im/${tool.site.url}`} alt={tool.site.name} />
              )}
            </Avatar>
          </a>
        </div>
        {tool.tags && tool.tags.length > 0 && (
          <Popover>
            <PopoverTrigger className="flex gap-2 items-center overflow-x-auto whitespace-nowrap h-5 cursor-pointer hover:bg-accent">
              {tool.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#878787] font-mono flex-shrink-0"
                >
                  {tag}
                </span>
              ))}
              {tool.tags.length > 2 && (
                <span className="text-xs text-[#878787] font-mono flex gap-1 items-center">
                  <span>+{tool.tags.length - 2} 更多</span>
                  <ChevronDown className="w-3 h-3" />
                </span>
              )}
            </PopoverTrigger>
            <PopoverContent>
              {tool.tags.map((tag) => (
                <div key={tag} className="flex flex-col justify-center gap-2">
                  <span className="text-xs text-[#878787] font-mono flex-shrink-0">
                    {tag}
                  </span>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        )}
      </CardHeader>
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono p-4 text-sm opacity-70 hover:opacity-100 transition-opacity group relative flex-grow",
          isPage && "opacity-100",
        )}
      >
        <div className="group-hover:flex hidden right-4 bottom-4 absolute z-10 space-x-2">
          <VisitButton url={tool.site.url} />
          <CopyButton content={tool.site.url} slug={tool.slug} />
        </div>

        <Link href={`/tool/${tool.slug}`}>
          <div className="flex flex-col h-full">
            <div className="h-32 overflow-hidden mb-2">
              <img 
                src={`https://urlscan.io/liveshot/?url=${tool.site.url}`} 
                alt={tool.site.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <ScrollArea className="flex-1 mt-2">
              <p className="text-sm pr-3">{tool.description}</p>
            </ScrollArea>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export function ToolPage({ tool }: { tool: ToolType }) {
  return (
    <Card className="bg-background p-4 h-fit flex flex-col">
      <CardHeader className="p-0 space-y-1 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold leading-none pb-2">{tool.site.name}</h1>
          <a href={tool.site.url} target="_blank" rel="noopener noreferrer">
            <Avatar className="size-6">
              {isImageUrl(tool.site.icon) ? (
                <AvatarImage src={tool.site.icon} alt={tool.site.name} />
              ) : (
                // <AvatarFallback>
                //   {generateNameAbbr(tool.site.name)}
                // </AvatarFallback>
                <AvatarImage src={`https://Favicon.im/${tool.site.url}`} alt={tool.site.name} />
              )}
            </Avatar>
          </a>
        </div>
        {tool.tags && tool.tags.length > 0 && (
          <Popover>
            <PopoverTrigger className="flex gap-2 py-4 items-center overflow-x-auto whitespace-nowrap h-5 cursor-pointer hover:bg-accent">
              {tool.tags.slice(0, 8).map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-[#878787] font-mono flex-shrink-0"
                >
                  {tag}
                </span>
              ))}
              {tool.tags.length > 8 && (
                <span className="text-xs text-[#878787] font-mono flex gap-1 items-center">
                  <span>+{tool.tags.length - 8} 更多</span>
                  <ChevronDown className="w-3 h-3" />
                </span>
              )}
            </PopoverTrigger>
            <PopoverContent>
              {tool.tags.map((tag) => (
                <div key={tag} className="flex flex-col justify-center gap-2">
                  <span className="text-xs text-[#878787] font-mono flex-shrink-0">
                    {tag}
                  </span>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        )}
      </CardHeader>
      <CardContent
        className="bg-card h-full mb-2 font-mono p-4 text-sm transition-opacity group relative flex-grow"
      >
        <div className="group-hover:flex hidden right-4 bottom-4 absolute z-10 space-x-2">
          <VisitButton url={tool.site.url} />
          <CopyButton content={tool.site.url} slug={tool.slug} />
        </div>

        <Link href={tool.site.url} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col h-full">
            <div className="h-[28rem] overflow-hidden mb-2">
              <img 
                src={`https://urlscan.io/liveshot/?url=${tool.site.url}`} 
                alt={tool.site.name}
                className="h-full w-auto object-contain"
              />
            </div>
            <ScrollArea className="flex-1 mt-2">
              <p className="text-sm pr-3">{tool.description}</p>
            </ScrollArea>
          </div>
        </Link>
      </CardContent>      
    </Card>
  );
}
