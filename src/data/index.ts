// tools

import { ideaTools } from "./tools/idea";
import { designTools } from "./tools/design";
import { uiFrameworks } from "./tools/ui-framework";
import { uiComponentLibraries } from "./tools/ui-component";
import { iconLibraries } from "./tools/icon";
import { fontLibraries } from "./tools/font";
import { templateLibraries } from "./tools/template";
import { developmentTools } from "./tools/ide";
import { frontendWebFrameworks } from "./tools/web-framework";
import { mobileAppFrameworks } from "./tools/app-framework";
import { chromeExtensionFrameworks } from "./tools/chrome-framework";
import { backendFrameworks } from "./tools/backend-framework";
import { cloudDatabases } from "./tools/database";
import { ormTools } from "./tools/orm";
import { storageTools } from "./tools/storage";
import { authenticationSolutions } from "./tools/auth";
import { paymentSolutions } from "./tools/payment";
import { i18nTools } from "./tools/i18n";
import { domainRegistrars } from "./tools/domain-registrar";
import { emailServices } from "./tools/email";
import { deploymentServices } from "./tools/deployment";
import { productLaunchPlatforms } from "./tools/product-launch";
import { analyticsTools } from "./tools/analytics";
import { seoTools } from "./tools/seo";

export const tools = [
  ...ideaTools,
  ...designTools,
  ...uiFrameworks,
  ...uiComponentLibraries,
  ...iconLibraries,
  ...fontLibraries,
  ...templateLibraries,
  ...developmentTools,
  ...frontendWebFrameworks,
  ...mobileAppFrameworks,
  ...chromeExtensionFrameworks,
  ...backendFrameworks,
  ...cloudDatabases,
  ...ormTools,
  ...storageTools,
  ...authenticationSolutions,
  ...paymentSolutions,
  ...i18nTools,
  ...domainRegistrars,
  ...emailServices,
  ...deploymentServices,
  ...productLaunchPlatforms,
  ...analyticsTools,
  ...seoTools
]

export function getToolCategories() {
  const categories = Array.from(new Set(tools.flatMap((tool) => tool.category)));

  return categories
    .map((category_item) => ({
      category_item,
      tools: tools.filter((tool) => tool?.category?.includes(category_item)),
    }))
    .sort((a, b) => b.tools.length - a.tools.length);
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
