// AnimatedText.tsx
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function AnimatedText() {
	const textRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (textRef.current) {
			gsap.fromTo(
				textRef.current,
				{ text: "" },
				{
					duration: 5,
					text: {
						value: "Focused on building accessible digital experiences.",
						delimiter: "",
					},
					ease: "none",
				}
			);
		}
	}, []);

	return (
		<p ref={textRef} className="mb-8 text-muted-foreground">
			Focused on building accessible digital experiences.
		</p>
	);
}
