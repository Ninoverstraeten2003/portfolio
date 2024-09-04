import type { Metadata } from "next";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";
import "./globals.css";
import Providers from "./providers";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const seoKeywords = [
	"web development",
	"web development services",
	"custom web development",
	"front-end development",
	"back-end development",
	"full-stack development",
	"responsive web design",
	"e-commerce development",
	"website maintenance",
	"website optimization",
	"web development company",
	"web development agency",
	"mobile-friendly websites",
	"UI/UX design",
	"JavaScript development",
	"React development",
	"Angular development",
	"Vue.js development",
	"PHP development",
	"Node.js development",
	"WordPress development",
	"CMS development",
	"website redesign",
	"SEO-friendly websites",
	"website security",
	"API integration",
	"web app development",
	"SaaS development",
	"progressive web apps",
	"website hosting services",
	"custom website solutions",
];

export const metadata: Metadata = {
	metadataBase: new URL("https://www.ninoverstraeten.com"),
	keywords: [...seoKeywords],
	title: "Nino Verstraeten - Software Engineer",
	description:
		"Hi, I'm Nino, a software engineer based in Belgium. I have been captivated by the world of science and technology since childhood and eager to contribute to cutting-edge projects and drive technological advancements",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.ninoverstraeten.com",
		title: "Nino Verstraeten - Software Engineer",
		description: "Hi, I'm Nino, a software engineer based in Belgium...",
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
	jobTitle: "Software Engineer",
	description:
		"Hi, I'm Nino, a software engineer based in Belgium. I have been captivated by the world of science and technology since childhood and eager to contribute to cutting-edge projects and drive technological advancements",
	url: "https://www.ninoverstraeten.com",
	sameAs: [
		"https://www.linkedin.com/in/nino-verstraeten",
		"https://www.github.com/Ninoverstraeten2003",
		"https://www.instagram.com/nino_verstraeten",
	],
	image: "/thumb.png",
	alumniOf: {
		"@type": "EducationalOrganization",
		name: "KU Leuven", // Assuming based on the project about Leuven2030
	},
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
				x<script defer src="script.js"></script>
			</head>
			<body className={`${inter.className} dark`}>
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
