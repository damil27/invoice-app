import { Navbar } from "@/components/Navbar";
import { Provider } from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "Invoice  App",
  description: "Damilare invoice  app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
