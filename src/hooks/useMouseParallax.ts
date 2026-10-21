import {useMotionValue, useSpring} from 'framer-motion';
import {useEffect} from 'react';

const spring = {stiffness: 50, damping: 30};

// Mouse parallax via motion values: animates the element without re-rendering React on every mousemove.
const useMouseParallax = (strength: number) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * strength);
      y.set((e.clientY / window.innerHeight - 0.5) * strength);
    };

    window.addEventListener('mousemove', handleMouseMove, {passive: true});
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, strength]);

  return {x: useSpring(x, spring), y: useSpring(y, spring)};
};

export default useMouseParallax;
