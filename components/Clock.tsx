
import React, { useEffect, useRef } from 'react';
import { LOGO_URL } from '../constants.tsx';

const Clock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Load logo
    const img = new Image();
    img.src = LOGO_URL;
    img.onload = () => {
      logoRef.current = img;
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const radius = canvas.width / 2;
    const clockRadius = radius * 0.9;

    let animationId: number;

    const drawCenterDot = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
      ctx.shadowBlur = 6;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(197, 160, 89, 0.9)'; // Magnum Gold
      ctx.shadowColor = 'rgba(197, 160, 89, 0.5)';
      ctx.shadowBlur = 4;
      ctx.fill();
    };

    const drawHand = (ctx: CanvasRenderingContext2D, angle: number, length: number, width: number, color: string) => {
      ctx.save();
      ctx.rotate(angle);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.shadowColor = color;
      ctx.shadowBlur = 3;
      
      ctx.beginPath();
      ctx.moveTo(0, width);
      ctx.lineTo(length * 0.8, 0);
      ctx.lineTo(0, -width);
      ctx.lineTo(-length * 0.2, 0);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(length * 0.8, 0);
      ctx.lineTo(length, 0);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawSecondHand = (ctx: CanvasRenderingContext2D, angle: number, radius: number) => {
      ctx.save();
      ctx.rotate(angle);
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.9)'; // Magnum Gold accent
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(197, 160, 89, 0.5)';
      ctx.shadowBlur = 4;
      
      ctx.beginPath();
      ctx.moveTo(0, radius * 0.1);
      ctx.lineTo(0, -radius * 0.8);
      ctx.stroke();
      
      ctx.fillStyle = 'rgba(197, 160, 89, 0.9)';
      ctx.beginPath();
      ctx.arc(0, -radius * 0.8, 2, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.restore();
    };

    const drawClock = () => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      ctx.save();
      ctx.translate(radius, radius);

      // Face
      ctx.beginPath();
      ctx.arc(0, 0, clockRadius, 0, 2 * Math.PI);
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, clockRadius);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(0.7, '#141414');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Inner ring
      ctx.beginPath();
      ctx.arc(0, 0, clockRadius * 0.95, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Markers
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 12; i++) {
        ctx.save();
        ctx.rotate(i * Math.PI / 6);
        ctx.beginPath();
        ctx.moveTo(0, -clockRadius * 0.85);
        ctx.lineTo(0, -clockRadius * 0.75);
        ctx.stroke();
        ctx.restore();
      }

      // Numbers
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = `${clockRadius * 0.14}px 'Playfair Display', serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 - Math.PI / 2;
        const x = clockRadius * 0.60 * Math.cos(angle);
        const y = clockRadius * 0.60 * Math.sin(angle);
        ctx.fillText(romanNumerals[i], x, y);
      }

      // Brand / Logo
      if (logoRef.current) {
        const logoWidth = clockRadius * 0.45;
        const logoHeight = (logoRef.current.height / logoRef.current.width) * logoWidth;
        ctx.drawImage(logoRef.current, -logoWidth / 2, -clockRadius * 0.45, logoWidth, logoHeight);
      } else {
        ctx.font = `${clockRadius * 0.06}px 'Montserrat', sans-serif`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillText("M A G N U M   E S T A T E", 0, -clockRadius * 0.35);
      }

      ctx.font = `${clockRadius * 0.035}px 'Montserrat', sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillText("TIMELESS INVESTMENTS", 0, clockRadius * 0.45);

      // Hands
      const now = new Date();
      const ms = now.getMilliseconds();
      const sec = now.getSeconds() + ms / 1000;
      const min = now.getMinutes() + sec / 60;
      const hr = (now.getHours() % 12) + min / 60;

      drawHand(ctx, (hr * Math.PI / 6) - Math.PI / 2, clockRadius * 0.4, clockRadius * 0.02, 'rgba(255, 255, 255, 0.9)');
      drawHand(ctx, (min * Math.PI / 30) - Math.PI / 2, clockRadius * 0.6, clockRadius * 0.015, 'rgba(255, 255, 255, 0.95)');
      drawSecondHand(ctx, (sec * Math.PI / 30) - Math.PI / 2, clockRadius);
      drawCenterDot(ctx);

      ctx.restore();
      animationId = requestAnimationFrame(drawClock);
    };

    drawClock();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <canvas 
        ref={canvasRef} 
        width={500} 
        height={500} 
        className="max-w-full h-auto aspect-square rounded-full border border-white/5 shadow-[0_0_60px_rgba(255,255,255,0.02),inset_0_0_60px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
};

export default Clock;
