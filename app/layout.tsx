import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ChallengeProvider } from "@/context/challengeContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greek God Gym Challenges | Do You Have What It Takes?",
  icons: {
    icon: "/ggg_original_logo.jpeg",
    shortcut: "/ggg_original_logo.jpeg",
    apple: "/ggg_original_logo.jpeg",
  },
  description:
    "Join the ultimate Greek God Gym Challenge. Test your strength, endurance, and willpower. Start with the Plank Challenge and rise among the gods.",
  keywords: [
    "Greek God Gym",
    "fitness challenge",
    "plank challenge",
    "gym competition",
    "workout challenge",
    "fitness Nigeria",
    "body transformation",
    "greek god physique",
  ],
  openGraph: {
    title: "Greek God Gym Challenges",
    description:
      "Prove your strength and discipline. Compete in the Greek God Gym Plank Challenge.",
    url: "https://challenges.greekgodgym.com",
    siteName: "Greek God Gym Challenges",
    images: [
      {
        url: "https://challenges.greekgodgym.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Greek God Gym Challenge Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greek God Gym Challenges",
    description: "Do you have what it takes to be a Greek God?",
    images: ["https://challenges.greekgodgym.com/og-image.jpg"],
  },
  metadataBase: new URL("https://challenges.greekgodgym.com"),
  alternates: {
    canonical: "https://challenges.greekgodgym.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans antialiased bg-[#f2f2f3] text-white`}
      >
        <ChallengeProvider> {children}</ChallengeProvider>
      </body>
    </html>
  );
}
