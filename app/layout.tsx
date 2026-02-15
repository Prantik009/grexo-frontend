// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_shared/providers/ThemeProvider";
import AuthProvider from "./_shared/providers/AuthProvider";
import GoogleProvider from "./_shared/providers/GoogleProvider";
import ReactQueryProvider from "./_shared/providers/ReactQueryProvider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grexo | Premium Plants & Gardening",
  description: "Buy premium plants, seeds & planters online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ReactQueryProvider>
          <GoogleProvider>
            <ThemeProvider>
              <AuthProvider>
                {children}
                <Toaster position="top-center"/>
              </AuthProvider>
            </ThemeProvider>
          </GoogleProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
