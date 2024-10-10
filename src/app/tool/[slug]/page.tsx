import { Menu } from "@/components/menu";
import { ToolPage, type ToolType } from "@/components/tool-card";
import { getToolBySlug, tools } from "@/data";

export async function generateMetadata({
  params,
}: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);

  return {
    title: `${tool?.site.name} tool | Awesome Indie Hacker Tools`,
    description: tool?.description,
  };
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16">
        <ToolPage tool={tool as ToolType} />
      </main>
    </>
  );
}

export const revalidate = 86400; // Revalidate every 24 hours (86400 seconds)
