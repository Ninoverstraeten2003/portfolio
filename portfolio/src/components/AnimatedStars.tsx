"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function AnimatedStars() {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && starsContainerRef.current) {
      const stars = starsContainerRef.current.children;

      // Create animation for each star
      Array.from(stars).forEach((star) => {
        gsap.fromTo(
          star,
          { opacity: 0 },
          {
            opacity: 1,
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 5,
          },
        );
      });
    }
  }, [isLoaded]);

  return (
    <div
      className="fixed -z-20 h-screen w-full overflow-hidden"
      ref={starsContainerRef}
    >
      {/* Generate stars */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white opacity-0"
          style={{
            width: "2px",
            height: "2px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>
  );
}
