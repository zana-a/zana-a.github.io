import "@/app/globals.css";

import Container from "@/components/container";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Zana Ahmad",
  description: "Personal Blog.",
};

export default function RootLayout(props: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Container>{props.children}</Container>
      </body>
    </html>
  );
}
