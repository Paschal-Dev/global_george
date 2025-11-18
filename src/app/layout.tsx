"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SnackbarProvider } from "notistack";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
        >
          {children}
          <div className="bg-primary marquee sticky bottom-0 grid h-10 w-full place-items-center text-sm font-medium text-white shadow-xl sm:text-base md:h-16 xl:text-xl">
            <p>
              By January 1, 2026, Global George will officially implement the
              upfront payment policy, with a minimum investment amount of
              ₦250,000.
            </p>
          </div>
        </body>
      </html>
    </SnackbarProvider>
  );
}
