import { Menu } from "@/components/menu";
import { ToolCard, type ToolType } from "@/components/tool-card";
import { Tabs } from "@/components/tabs";
import { getToolCategories } from "@/data";

const categories = getToolCategories();

export default function Page() {
  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs />
        {categories.map((category, idx) => (
          <section key={category.category_item} id={category.category_item}>
            <h1 className="text-lg font-semibold mb-4">{category.category_item}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {category.tools.map((tool, idx2) => (
                <ToolCard key={`${idx}-${idx2.toString()}`} tool={tool as ToolType} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
