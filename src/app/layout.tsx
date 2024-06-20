import type { Metadata } from "next";
import "../styles/globals.css";
import Layout from "@/components/Layouts/Layout";


export const metadata: Metadata = {
  title: "MMA vision",
  description: "Concept by Ronindevo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
