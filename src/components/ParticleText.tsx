import React from 'react';
import { useParticleText } from '../hooks/useParticleText';

interface ParticleTextProps {
  text: string;
  className?: string;
}

export const ParticleText: React.FC<ParticleTextProps> = ({
  text,
  className = '',
}) => {
  const { containerRef, canvasRef, headingRef, isReducedMotion } = useParticleText({ text });

  return (
    <div ref={containerRef} className="particle-text relative">
      {!isReducedMotion && <canvas ref={canvasRef} aria-hidden="true" className="particle-text__canvas absolute" />}
      <h1 ref={headingRef} className={`particle-text__heading ${isReducedMotion ? 'particle-text__heading--static' : ''} ${className}`}>
        {text}
      </h1>
    </div>
  );
};