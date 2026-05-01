import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { LocaleProvider } from "@/message/localProvider";
import { HtmlLangUpdater } from "@/components/HtmlLangUpdater";
import { Toaster } from "@/components/ui/toaster";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import { LoadingProvider } from "@/components/Loading";

const geistSans = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Teddy Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <LocaleProvider>
          <ReactQueryProvider>
            <HtmlLangUpdater />
            <Toaster />
            <StairTransition />
            <PageTransition>
              <LoadingProvider>{children}</LoadingProvider>
            </PageTransition>
          </ReactQueryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
