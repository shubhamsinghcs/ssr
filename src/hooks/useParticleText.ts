import { RefObject, useEffect, useRef, useState } from 'react';

export interface ParticleTextOptions {
  text: string;
}

export interface ParticleTextRefs {
  containerRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  headingRef: RefObject<HTMLHeadingElement | null>;
}

interface Particle {
  x: number;
  y: number;
  scatterX: number;
  scatterY: number;
  targetX: number;
  targetY: number;
  size: number;
}

const SAMPLE_STEP = 3;
const SCATTER_PADDING_X = 64;
const SCATTER_PADDING_Y = 38;
const LERP_AMOUNT = 0.055;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

export function useParticleText({ text }: ParticleTextOptions): ParticleTextRefs & { isReducedMotion: boolean } {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const fillCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const smoothProgressRef = useRef(0);
  const [isReducedMotion, setIsReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setIsReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener('change', updateMotionPreference);
    return () => motionQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return undefined;

    const canvas = canvasRef.current;
    const heading = headingRef.current;
    if (!canvas || !heading) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    const setupParticles = () => {
      const bounds = heading.getBoundingClientRect();
      const textWidth = Math.max(1, Math.ceil(bounds.width));
      const textHeight = Math.max(1, Math.ceil(bounds.height));
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const canvasWidth = textWidth + SCATTER_PADDING_X * 2;
      const canvasHeight = textHeight + SCATTER_PADDING_Y * 2;
      const offscreen = document.createElement('canvas');
      offscreen.width = canvasWidth * pixelRatio;
      offscreen.height = canvasHeight * pixelRatio;

      const offscreenContext = offscreen.getContext('2d');
      if (!offscreenContext) return;

      canvas.width = offscreen.width;
      canvas.height = offscreen.height;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      canvas.style.left = `${-SCATTER_PADDING_X}px`;
      canvas.style.top = `${-SCATTER_PADDING_Y}px`;

      offscreenContext.scale(pixelRatio, pixelRatio);
      const style = window.getComputedStyle(heading);
      offscreenContext.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      offscreenContext.textBaseline = 'top';
      offscreenContext.fillStyle = '#fff';
      offscreenContext.fillText(text, SCATTER_PADDING_X, SCATTER_PADDING_Y);
      fillCanvasRef.current = offscreen;

      const pixels = offscreenContext.getImageData(0, 0, offscreen.width, offscreen.height).data;
      const particles: Particle[] = [];
      const scaledStep = SAMPLE_STEP * pixelRatio;
      for (let y = SCATTER_PADDING_Y * pixelRatio; y < (SCATTER_PADDING_Y + textHeight) * pixelRatio; y += scaledStep) {
        for (let x = SCATTER_PADDING_X * pixelRatio; x < (SCATTER_PADDING_X + textWidth) * pixelRatio; x += scaledStep) {
          const alpha = pixels[(Math.floor(y) * offscreen.width + Math.floor(x)) * 4 + 3];
          if (alpha > 150) {
            particles.push({
              x: 0,
              y: 0,
              scatterX: Math.random() * canvasWidth,
              scatterY: Math.random() * canvasHeight,
              targetX: x / pixelRatio,
              targetY: y / pixelRatio,
              size: 1.1 + Math.random() * 0.4,
            });
          }
        }
      }
      particlesRef.current = particles;
    };

    setupParticles();
    document.fonts?.ready.then(setupParticles);

    let animationFrame = 0;
    const animate = () => {
      const rect = heading.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const maxDistance = Math.max(window.innerHeight * 0.75, rect.height);
      const targetProgress = clamp(1 - Math.abs(elementCenter - viewportCenter) / maxDistance, 0, 1);
      smoothProgressRef.current = lerp(smoothProgressRef.current, targetProgress, LERP_AMOUNT);
      const progress = smoothProgressRef.current;

      context.clearRect(0, 0, canvas.width, canvas.height);
      if (fillCanvasRef.current) {
        context.save();
        context.globalAlpha = clamp((progress - 0.15) / 0.45, 0, 1);
        context.drawImage(fillCanvasRef.current, 0, 0);
        context.restore();
      }

      context.save();
      context.scale(Math.min(window.devicePixelRatio || 1, 2), Math.min(window.devicePixelRatio || 1, 2));
      context.fillStyle = '#F5F5F5';
      context.globalAlpha = 1 - clamp(progress * 1.15, 0, 1);
      for (const particle of particlesRef.current) {
        particle.x = lerp(particle.scatterX, particle.targetX, progress);
        particle.y = lerp(particle.scatterY, particle.targetY, progress);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * (1 - progress * 0.25), 0, Math.PI * 2);
        context.fill();
      }
      context.restore();

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    const handleResize = () => setupParticles();
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      fillCanvasRef.current = null;
    };
  }, [isReducedMotion, text]);

  return { containerRef, canvasRef, headingRef, isReducedMotion };
}
