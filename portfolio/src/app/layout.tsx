import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

import { Inter } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

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
	title: "Nino Verstraeten",
	openGraph: {
		description: "My portfolio",
		images: ["/thumb.png"],
	},
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
				<script defer src="script.js"></script>
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
