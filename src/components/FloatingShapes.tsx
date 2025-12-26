import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "cube" | "sphere" | "hexagon";
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const shapes: Shape[] = [
  { id: 1, type: "cube", size: 60, x: 10, y: 20, delay: 0, duration: 20 },
  { id: 2, type: "sphere", size: 40, x: 85, y: 30, delay: 2, duration: 25 },
  { id: 3, type: "hexagon", size: 50, x: 75, y: 70, delay: 1, duration: 22 },
  { id: 4, type: "cube", size: 35, x: 20, y: 75, delay: 3, duration: 18 },
  { id: 5, type: "sphere", size: 45, x: 90, y: 80, delay: 1.5, duration: 24 },
];

function Cube({ size }: { size: number }) {
  const half = size / 2;
  
  return (
    <div 
      className="relative preserve-3d animate-spin-slow"
      style={{ 
        width: size, 
        height: size,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Front */}
      <div 
        className="absolute bg-primary/20 border border-primary/40 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          transform: `translateZ(${half}px)`,
        }}
      />
      {/* Back */}
      <div 
        className="absolute bg-primary/10 border border-primary/30"
        style={{
          width: size,
          height: size,
          transform: `rotateY(180deg) translateZ(${half}px)`,
        }}
      />
      {/* Left */}
      <div 
        className="absolute bg-primary/15 border border-primary/35"
        style={{
          width: size,
          height: size,
          transform: `rotateY(-90deg) translateZ(${half}px)`,
        }}
      />
      {/* Right */}
      <div 
        className="absolute bg-primary/15 border border-primary/35"
        style={{
          width: size,
          height: size,
          transform: `rotateY(90deg) translateZ(${half}px)`,
        }}
      />
      {/* Top */}
      <div 
        className="absolute bg-primary/25 border border-primary/50"
        style={{
          width: size,
          height: size,
          transform: `rotateX(90deg) translateZ(${half}px)`,
        }}
      />
      {/* Bottom */}
      <div 
        className="absolute bg-primary/10 border border-primary/20"
        style={{
          width: size,
          height: size,
          transform: `rotateX(-90deg) translateZ(${half}px)`,
        }}
      />
    </div>
  );
}

function Sphere({ size }: { size: number }) {
  return (
    <div 
      className="rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent border border-primary/40 backdrop-blur-sm shadow-lg animate-pulse-glow"
      style={{ 
        width: size, 
        height: size,
        boxShadow: `0 0 ${size/2}px hsl(var(--primary) / 0.3), inset 0 0 ${size/3}px hsl(var(--primary) / 0.2)`,
      }}
    />
  );
}

function Hexagon({ size }: { size: number }) {
  return (
    <div 
      className="relative animate-spin-reverse"
      style={{ width: size, height: size * 1.15 }}
    >
      <svg viewBox="0 0 100 115" className="w-full h-full">
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <polygon 
          points="50,0 100,28.75 100,86.25 50,115 0,86.25 0,28.75" 
          fill="url(#hexGradient)"
          stroke="hsl(var(--primary))"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float-3d"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
            opacity: 0.7,
          }}
        >
          {shape.type === "cube" && <Cube size={shape.size} />}
          {shape.type === "sphere" && <Sphere size={shape.size} />}
          {shape.type === "hexagon" && <Hexagon size={shape.size} />}
        </div>
      ))}
    </div>
  );
}
