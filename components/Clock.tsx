
import React, { useEffect, useRef, useState } from 'react';
import { LOGO_URL } from '../constants.tsx';

const Clock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tintedLogoRef = useRef<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Manually tint the logo to white once at the pixel level
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = LOGO_URL;
    img.onload = () => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = img.width;
      offCanvas.height = img.height;
      const offCtx = offCanvas.getContext('2d');
      if (offCtx) {
        offCtx.drawImage(img, 0, 0);
        const imageData = offCtx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;
        // Loop through all pixels and set RGB to white (255)
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] > 10) { // If pixel is mostly non-transparent
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;
          }
        }
        offCtx.putImageData(imageData, 0, 0);
        tintedLogoRef.current = offCanvas;
        setIsReady(true);
      }
    };
  }, [LOGO_URL]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const dpr = window.devicePixelRatio || 2;
      const displaySize = canvas.clientWidth || 500;

      if (canvas.width !== displaySize * dpr) {
        canvas.width = displaySize * dpr;
        canvas.height = displaySize * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, displaySize, displaySize);

      // Force absolute solid rendering mode
      ctx.globalCompositeOperation = 'source-over';
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const radius = displaySize / 2;
      const clockRadius = radius * 0.94;
      ctx.translate(radius, radius);

      // --- 1. Face ---
      ctx.beginPath();
      ctx.arc(0, 0, clockRadius, 0, 2 * Math.PI);
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, clockRadius);
      grad.addColorStop(0, '#1a1a1a');
      grad.addColorStop(1, '#080808');
      ctx.fillStyle = grad;
      ctx.fill();

      // --- 2. Markers ---
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 60; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 30);
        const isMajor = i % 5 === 0;
        ctx.beginPath();
        const startLen = isMajor ? 0.88 : 0.93;
        ctx.moveTo(0, -clockRadius * startLen);
        ctx.lineTo(0, -clockRadius * 0.97);
        ctx.stroke();
        ctx.restore();
      }

      // --- 3. Roman Numerals ---
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${radius * 0.12}px "Playfair Display", serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      const roman = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 - Math.PI / 2;
        const x = clockRadius * 0.65 * Math.cos(angle);
        const y = clockRadius * 0.65 * Math.sin(angle);
        ctx.fillText(roman[i], x, y);
      }

      // --- 4. White Logo (Manual pixel tinted) ---
      if (tintedLogoRef.current) {
        const logoTargetW = clockRadius * 0.5;
        const logoTargetH = (tintedLogoRef.current.height / tintedLogoRef.current.width) * logoTargetW;
        ctx.drawImage(tintedLogoRef.current, -logoTargetW / 2, -clockRadius * 0.4, logoTargetW, logoTargetH);
      }

      // --- 5. Hand Logic ---
      const now = new Date();
      const s = now.getSeconds() + now.getMilliseconds() / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;

      const drawHand = (angle: number, length: number, width: number, color: string) => {
        ctx.save();
        ctx.rotate(angle - Math.PI / 2);
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.moveTo(-length * 0.05, 0);
        ctx.lineTo(length, 0);
        ctx.stroke();
        ctx.restore();
      };

      drawHand((h * Math.PI) / 6, clockRadius * 0.45, 4, '#FFFFFF');
      drawHand((m * Math.PI) / 30, clockRadius * 0.72, 3, '#FFFFFF');

      // Second hand
      ctx.save();
      ctx.rotate((s * Math.PI) / 30 - Math.PI / 2);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#C5A059';
      ctx.beginPath();
      ctx.moveTo(-clockRadius * 0.1, 0);
      ctx.lineTo(clockRadius * 0.85, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#C5A059';
      ctx.fill();
      ctx.restore();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isReady]);

  return (
    <div className="flex items-center justify-center p-4 w-full h-full">
      <canvas
        ref={canvasRef}
        style={{ width: '500px', height: '500px' }}
        className="max-w-full h-auto aspect-square rounded-full border border-white/5 shadow-2xl"
      />
    </div>
  );
};

export default Clock;
