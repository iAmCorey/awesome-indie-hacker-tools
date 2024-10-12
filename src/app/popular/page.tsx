import { Menu } from "@/components/menu";
import { type ToolType, ToolCard } from "@/components/tool-card";
import { Tabs } from "@/components/tabs";
import { getPopularTools } from "@/data/popular";

export const metadata = {
  title: "Popular tools",
  description: "Popular tools, frameworks, libraries and more for Indie Hackers.",
};

export const revalidate = 86400; // Revalidate once every day

const popularTools = await getPopularTools();

export default async function Page() {
  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs />
        {popularTools?.map(
          // @ts-ignore
          (category: { category_item: string; tools: ToolType[] }, idx: number) => (
            <section key={category.category_item} id={category.category_item}>
              <h3 className="text-lg font-semibold mb-4">{category.category_item}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                {category.tools.map((tool: ToolType, idx2: number) => (
                  <ToolCard key={`${idx}-${idx2.toString()}`} tool={tool as ToolType} />
                ))}
              </div>
            </section>
          ),
        )}
      </main>
    </>
  );
}
