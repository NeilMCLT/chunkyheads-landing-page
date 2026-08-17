import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChunkyHeads — Coming Soon",
  description:
    "The official home of ChunkyHeads—premium aquaculture nutrition and trusted ornamental fish essentials for Philippine keepers.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/chunkyheads-mark.png",
    shortcut: "/chunkyheads-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
