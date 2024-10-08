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
        {
          opacity: 0,
          text: "",
        },
        {
          opacity: 1,
          duration: 3,
          delay: 2, // You can adjust this delay as needed
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
    <>
      <p className="mb-4 min-h-12 text-muted-foreground sm:hidden">
        Focused on building accessible digital experiences.
      </p>
      <p
        ref={textRef}
        className="mb-2 hidden min-h-12 text-muted-foreground opacity-0 sm:block"
      >
        {/* Leave this empty, GSAP will fill it */}
      </p>
    </>
  );
}
