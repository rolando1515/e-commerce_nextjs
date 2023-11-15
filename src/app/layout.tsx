import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "flowmazon",
  description: "lets make your walet cry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="MIN-W-[300px] m-auto max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
