import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import { Providers } from "./_components/providers";
import Footer from "./_components/footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "avitld.xyz",
  description: "Programmer, GNU/Linux & *BSD Hobbyist, Free Software Hacktivist.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.png',
        href: '/logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.png',
        href: '/logo.png',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.className}>
      <body className="text-Neutrals/neutrals-12 bg-Neutrals/neutrals-1 dark:text-Neutrals/neutrals-1 dark:bg-Neutrals/neutrals-12">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
