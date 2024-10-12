import { Banner } from "@/components/banner";
import "./globals.css";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { PlusIcon } from "lucide-react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Awesome Indie Hacker Tools",
  description: "Find the best tools for indie hackers",
  icons: [
    {
      rel: "icon",
      url: "https://cdn.midday.ai/cursor/favicon.png",
    },
  ],
  openGraph: {
    title: "Awesome Indie Hacker Tools",
    description: "Find the best tools for indie hackers",
    url: "https://awesomeindiehacker.tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "Awesome Indie Hacker Tools",
    description: "Find the best tools for indie hackers",
    images: [
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        `${GeistSans.variable} ${GeistMono.variable}`,
        "whitespace-pre-line antialiased bg-background text-foreground",
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <div className="flex">
            {children}

            <a
              href="https://github.com/iAmCorey/awesome-indie-hacker-tools"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="hidden size-[48px] bg-[#F5F5F3]/30 text-black border border-black rounded-full font-medium fixed bottom-4 left-6 z-10 backdrop-blur-lg dark:bg-[#F5F5F3]/30 dark:text-white dark:border-white"
                variant="outline"
                size="icon"
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <Banner />
          <Toaster />
        </ThemeProvider>
      </body>

      <OpenPanelComponent
        clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
        trackScreenViews
      />
    </html>
  );
}
