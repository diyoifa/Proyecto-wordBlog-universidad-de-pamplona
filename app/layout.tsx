import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World blog",
  description: "Encuentra posts sobre programacion y demas temas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <ThemeProvider>
              <div className="flex flex-col min-h-screen  my-0 mx-auto  dark:bg-background">
                <Navbar />
                {children}
                <Footer />
                <Toaster />
              </div>
            </ThemeProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
