import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const montesserrat = Montserrat({subsets: ["latin"]})
export const metadata = {
  title: "Visualcraft",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${montesserrat.className}`} 
      > 
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
