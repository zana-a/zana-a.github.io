import "@/app/globals.css";

import Navbar from "@/components";

export const metadata = {
  title: "Zana Ahmad",
  description: "Personal Blog.",
};

export default function RootLayout(props: { children: JSX.Element[] }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {props.children}
      </body>
    </html>
  );
}
