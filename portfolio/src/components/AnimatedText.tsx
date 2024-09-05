// AnimatedText.tsx
"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

export default function AnimatedText() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { text: "" },
        {
          duration: 3,
          text: {
            value: "Focused on building accessible digital experiences.",
            delimiter: "",
          },
          ease: "none",
        },
      );
    }
  }, []);

  return (
    <p ref={textRef} className="mb-8 min-h-12 text-muted-foreground sm:min-h-0">
      Focused on building accessible digital experiences.
    </p>
  );
}
