import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samarth Mamadapur - Data Scientist",
  description: "Professional CV of Samarth Mamadapur, Data Scientist with expertise in ML/AI solutions at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}