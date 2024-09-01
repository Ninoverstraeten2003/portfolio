import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Nino Verstraeten",
	description: "Developed by the one and only",
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
			<body className={`${geistSans.variable} ${geistMono.variable} dark`}>
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
