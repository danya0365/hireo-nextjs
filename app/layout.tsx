import { ThemeProvider } from "@/src/presentation/components/providers/ThemeProvider";
import type { Metadata } from "next";
import "../public/styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hireo.app"),
  title: {
    default: "Hireo | แพลตฟอร์มรวมฟรีแลนซ์และจ้างงานออนไลน์ระดับมืออาชีพ",
    template: "%s | Hireo"
  },
  description:
    "ค้นหาและจ้างฟรีแลนซ์มืออาชีพ หรือเสนอผลงานของคุณใน Hireo แพลตฟอร์มงานออนไลน์ที่รองรับบริการครบวงจร",
  keywords: [
    "Hireo",
    "ฟรีแลนซ์",
    "จ้างงานออนไลน์",
    "Hire freelance",
    "งานรับจ้าง",
    "แพลตฟอร์มฟรีแลนซ์"
  ],
  authors: [{ name: "Hireo Team" }],
  creator: "Hireo",
  publisher: "Hireo",
  openGraph: {
    title: "Hireo | แพลตฟอร์มรวมฟรีแลนซ์และจ้างงานออนไลน์ระดับมืออาชีพ",
    description:
      "ยกระดับการหางานและจ้างงานฟรีแลนซ์ด้วยเครื่องมือครบวงจรที่ตอบโจทย์ธุรกิจทุกขนาด",
    url: "https://hireo.app",
    siteName: "Hireo",
    locale: "th_TH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hireo | แพลตฟอร์มรวมฟรีแลนซ์และจ้างงานออนไลน์ระดับมืออาชีพ",
    description:
      "ยกระดับการหางานและจ้างงานฟรีแลนซ์ด้วยเครื่องมือครบวงจรที่ตอบโจทย์ธุรกิจทุกขนาด",
    creator: "@hireo",
    site: "@hireo"
  },
  alternates: {
    canonical: "https://hireo.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
