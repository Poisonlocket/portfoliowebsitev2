
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {useMessages} from "use-intl";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps{
    children: React.ReactNode,
    params: {
        locale: string;
    }
}

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
                                       children,
                                   }:   Readonly<RootLayoutProps>) {
    const messages = useMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
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
          <NextIntlClientProvider messages={messages}>
        {children}
          </NextIntlClientProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
