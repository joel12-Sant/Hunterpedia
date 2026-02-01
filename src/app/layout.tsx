import type { Metadata } from "next";
import { Geist, Geist_Mono, Bangers } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hunterpedia",
  description: "Hunterpedia: información de personajes de hunter x hunter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} antialiased bg-(--color-fondo)`}>
        <main className="min-h-screen bg-(--color-fondo)">
          <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
            <div className="w-full px-6 md:px-12 py-4 flex items-center justify-center">
              <Link href="/" className="text-4xl md:text-5xl font-bangers tracking-wider text-(--color-boton)">
                Hunterpedia
              </Link>
            </div>
          </header>

          <section className="w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
