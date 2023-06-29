import "@/app/globals.css";
import Navbar from "@/components/global/navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {props.children}
      </body>
    </html>
  );
}
