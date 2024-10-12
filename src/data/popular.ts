import { redis } from "@/lib/redis";
import { getToolCategories } from ".";
export async function getPopularTools() {
  const categories = getToolCategories();

  const categoriesWithCounts = await Promise.all(
    categories.map(async (category) => {
      const toolsWithCounts = await Promise.all(
        category.tools.map(async (tool) => {
          const count = await redis.get(`tool:${tool.slug}`);
          return {
            ...tool,
            count: Number(count) || 0,
          };
        }),
      );

      const sortedTools = toolsWithCounts.sort((a, b) => b.count - a.count);
      const totalCount = sortedTools.reduce((sum, tool) => sum + tool.count, 0);

      return {
        ...category,
        tools: sortedTools,
        totalCount,
      };
    }),
  );

  return categoriesWithCounts.sort((a, b) => b.totalCount - a.totalCount);
}
