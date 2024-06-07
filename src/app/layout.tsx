import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Name Hunt",
  description: "Find a name for your project",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
