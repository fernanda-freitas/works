import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Fernanda Freitas — Codebuilder",
  description: "Portfolio of Fernanda Freitas, a codebuilder currently at V-A Studio.",
  icons: {
    icon: [
      { url: `${basePath}/favicon/favicon-96x96.png`, sizes: "96x96", type: "image/png" },
      { url: `${basePath}/favicon/favicon.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${basePath}/favicon/favicon.ico`,
    apple: [
      { url: `${basePath}/favicon/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${basePath}/favicon/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${dmSans.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
