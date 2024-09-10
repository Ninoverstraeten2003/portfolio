import type { Metadata } from "next";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";
import "./globals.css";
import Providers from "./providers";

import { Inter } from "next/font/google";
import AnimatedStars from "@/components/AnimatedStars";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const seoKeywords = [
  "Web Development",
  "Full-Stack Development",
  "Responsive Web Design",
  "Java Development",
  "Spring Boot Development",
  "React Development",
  "NextJS Development",
  "Microservices Architecture",
  "REST API Development",
  "Docker",
  "Microsoft Azure",
  "C# Development",
  "Python Development",
  "Game Development",
  "Data Visualization",
  "Server-Sent Events (SSE)",
  "React Native Development",
  "Discord API Integration",
  "OpenAI API Integration",
  "Mobile-Friendly Websites",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ninoverstraeten.com"),
  keywords: [...seoKeywords],
  title: "Nino Verstraeten - Computer Science Student",
  description:
    "Hi, I'm Nino, a computer science student specializing in software engineering based in Belgium.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ninoverstraeten.com",
    title: "Nino Verstraeten - Computer Science Student",
    description:
      "Hi, I'm Nino, a computer science student specializing in software engineering based in Belgium.",
    images: [
      {
        url: "/thumb.png",
        width: 1200,
        height: 630,
        alt: "Portfolio snapshot",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ninoverstraeten.com",
  },
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nino Verstraeten",
  jobTitle: "Computer Science Student",
  description:
    "Hi, I'm Nino, a computer science student specializing in software engineering, based in Belgium.",
  url: "https://www.ninoverstraeten.com",
  sameAs: [
    "https://www.linkedin.com/in/nino-verstraeten",
    "https://www.github.com/Ninoverstraeten2003",
    "https://www.instagram.com/nino_verstraeten",
  ],
  image: "/thumb.png",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "UHasselt",
    },
    {
      "@type": "EducationalOrganization",
      name: "UC Leuven Limburg (UCLL)",
    },
  ],
  knowsAbout: [
    "Web Development",
    "Software Engineering",
    "TypeScript",
    "Angular",
    "React",
    "Java",
    "Spring Boot",
    "Microservices",
    "Docker",
    "Azure",
    "Python",
    "University Transfer",
    "Specialization in Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-TPWMJFWW');`,
          }}
        ></Script>
        <Script
          id="portfolio-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script defer src="script.js"></script>
      </head>
      <body className={`${inter.className} dark`}>
        <AnimatedStars />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPWMJFWW"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
