import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aleksandar Dimitrievski",
  description:
    "Aleksandar Dimitrievski - Frontend developer specializing in React, Next.js, and TypeScript. View my portfolio, projects, and web development work.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aleksandar Dimitrievski",
              url: "https://aleksandardimitrievski.com",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/aleksandar-dimitrievski-353827248/",
                "https://github.com/Sizo04",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
