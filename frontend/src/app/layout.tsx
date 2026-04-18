import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synexis AI | #1 Gym Automation Software USA & UK",
  description: "Automate your gym bookings, WhatsApp support, and lead capture in 48 hours. The most advanced AI Agent for fitness business growth.",
  keywords: ["Gym Automation", "AI Chatbot for Gym", "Fitness SaaS", "Lead Generation AI"],
  openGraph: {
    title: "Synexis AI - Managed Growth",
    description: "Built for Gym Owners, Powered by AI.",
    images: ["/og-image.png"], // Public folder mein image rakhna
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#020202] selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}