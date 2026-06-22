import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  animOffset: number;
}

interface NeuralBgProps {
  nodeCount?: number;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function NeuralBackground({ nodeCount = 50, className = '', intensity = 'medium' }: NeuralBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  const maxDist = intensity === 'low' ? 120 : intensity === 'high' ? 200 : 160;
  const speed = intensity === 'low' ? 0.2 : intensity === 'high' ? 0.5 : 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const initNodes = () => {
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
      buildConnections();
    };

    const buildConnections = () => {
      const conns: Connection[] = [];
      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            conns.push({ from: i, to: j, opacity: 1 - dist / maxDist, animOffset: Math.random() * Math.PI * 2 });
          }
        }
      }
      connectionsRef.current = conns;
    };

    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const nodes = nodesRef.current;

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Rebuild connections periodically
      if (Math.floor(time * 5) % 3 === 0) buildConnections();

      // Draw connections
      connectionsRef.current.forEach((conn) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        const pulse = (Math.sin(time * 2 + conn.animOffset) + 1) / 2;
        const alpha = conn.opacity * 0.25 * (0.5 + pulse * 0.5);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(20, 123, 255, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = (Math.sin(time * 1.5 + node.pulsePhase) + 1) / 2;
        const alpha = node.opacity * (0.6 + pulse * 0.4);
        const r = node.radius * (1 + pulse * 0.5);

        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
        gradient.addColorStop(0, `rgba(20, 123, 255, ${alpha * 0.6})`);
        gradient.addColorStop(1, 'rgba(20, 123, 255, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 123, 255, ${alpha})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [nodeCount, maxDist, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
}
