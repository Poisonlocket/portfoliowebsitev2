
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
         <title>Home</title>

      </head>
      <body>

      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >

        {children}

      </ThemeProvider>
      </body>
    </html>
  );
}
