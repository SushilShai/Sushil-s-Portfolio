import { useEffect, useState } from "react";

export default function StarCursor() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newStar = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4, // random size for sparkle
        glow: Math.random() * 12 + 8, // random glow for sparkle
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after fade-out
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="pointer-events-none fixed rounded-full animate-starFade"
          style={{
            width: star.size,
            height: star.size,
            left: star.x,
            top: star.y,
            transform: "translate(-50%, -50%)",
            background: "white",
            boxShadow: `0 0 ${star.glow}px white`,
          }}
        />
      ))}
    </>
  );
}
