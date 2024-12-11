import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Excellence",
  description: "For Excellence, By Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
