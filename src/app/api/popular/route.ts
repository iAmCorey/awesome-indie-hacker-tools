import { getPopularTools } from "@/data/popular";
import { NextResponse } from "next/server";

export const revalidate = 86400; // Revalidate once every day
export const dynamic = "force-static";

const popularTools = await getPopularTools();

export async function GET() {
  const allTools = popularTools.flatMap((section) => section.tools);

  // Create a Set to track unique slugs and an array for unique tool
  const uniqueSlugs = new Set();
  const uniqueTools = [];

  for (const tool of allTools) {
    if (uniqueSlugs.has(tool.slug)) continue; // Skip if slug is already in the Set
    uniqueSlugs.add(tool.slug); // Add slug to the Set
    uniqueTools.push(tool); // Keep the tool
  }

  const sortedTools = uniqueTools.sort((a, b) => b.count - a.count);

  return new NextResponse(JSON.stringify({ data: sortedTools }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=86400",
      "CDN-Cache-Control": "public, s-maxage=86400",
      "Vercel-CDN-Cache-Control": "public, s-maxage=86400",
    },
  });
}
