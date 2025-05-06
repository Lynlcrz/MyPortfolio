import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type ParticlesBackgroundProps = {
  children?: ReactNode;
};

const ParticlesBackground = ({ children }: ParticlesBackgroundProps) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const interactive = interactiveRef.current;
    if (!interactive) return;

    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;
    let targetX = curX;
    let targetY = curY;

    const move = () => {
      curX += (targetX - curX) / 10;
      curY += (targetY - curY) / 10;
      interactive.style.left = `${curX}px`;
      interactive.style.top = `${curY}px`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        const deltaY = event.clientY - lastY;
        window.scrollBy(0, deltaY);
        setLastY(event.clientY);
      } else {
        targetX = event.clientX;
        targetY = event.clientY;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        targetX = event.touches[0].clientX;
        targetY = event.touches[0].clientY;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      setIsMouseDown(true);
      setLastY(event.clientY);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, lastY]);

  return (
    <div className="w-full h-[60vh] absolute overflow-hidden top-0 left-0 z-10 bg-gradient-to-br from-black to-black shadow-lg">
      <svg className="fixed top-0 left-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <h1 className="z-[100] w-full h-full absolute top-[10%] left-[15%] text-6xl sm:text-4xl xs:text-3xl text-white opacity-30 font-sans m-0">
        Hi, I'm Niel
      </h1>

      <h3 className="z-[100] w-full h-full absolute text-2xl sm:text-xl xs:text-lg top-[43%] left-[15%] text-white opacity-30 font-sans m-0">
        Lyniel Cris S. Aya-ay
      </h3>

      <div className="w-full h-full filter-[url(#goo)_blur(40px)] shadow-lg">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute mix-blend-overlay rounded-full"
            style={{
              width: `${i < 4 ? '20%' : i < 7 ? '30%' : '40%'}`,
              height: `${i < 4 ? '20%' : i < 7 ? '30%' : '40%'}`,
              ...getGradientStyle(i + 1)
            }}
          />
        ))}
        <div 
          ref={interactiveRef} 
          className="absolute mix-blend-overlay rounded-full pointer-events-none opacity-100 z-[101]"
          style={{
            background: 'radial-gradient(circle at center, rgba(220, 220, 220, 0.8) 0, rgba(220, 220, 220, 0) 50%)',
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <div className="absolute inset-0 z-[10] flex items-center justify-center text-center px-4">
        {children}
      </div>
    </div>
  );
};

function getGradientStyle(index: number) {
  const colors = [
    'rgba(100, 100, 100, 0.8)',
    'rgba(150, 150, 150, 0.8)',
    'rgba(200, 200, 200, 0.8)',
    'rgba(120, 120, 120, 0.8)',
    'rgba(180, 180, 180, 0.8)'
  ];
  const color = colors[(index - 1) % colors.length];
  
  const styles = [
    {
      background: `radial-gradient(circle at center, ${color} 0, rgba(${(index - 1) * 20 + 100}, ${(index - 1) * 20 + 100}, ${(index - 1) * 20 + 100}, 0) 50%)`,
      top: 'calc(50% - 10%)',
      left: 'calc(50% - 10%)',
      transformOrigin: 'center center',
      animation: 'moveVertical 30s ease infinite'
    },
    {
      background: `radial-gradient(circle at center, ${color} 0, rgba(150, 150, 150, 0) 50%)`,
      top: 'calc(50% - 10%)',
      left: 'calc(50% - 10%)',
      transformOrigin: 'calc(50% - 400px)',
      animation: 'moveInCircle 20s reverse infinite'
    },
    {
      background: `radial-gradient(circle at center, ${color} 0, rgba(200, 200, 200, 0) 50%)`,
      top: 'calc(50% - 10% + 200px)',
      left: 'calc(50% - 10% - 500px)',
      transformOrigin: 'calc(50% + 400px)',
      animation: 'moveInCircle 40s linear infinite'
    },
    {
      background: `radial-gradient(circle at center, ${color} 0, rgba(120, 120, 120, 0) 50%)`,
      top: 'calc(50% - 10%)',
      left: 'calc(50% - 10%)',
      transformOrigin: 'calc(50% - 200px)',
      animation: 'moveHorizontal 40s ease infinite',
      opacity: 0.7
    },
    {
      background: `radial-gradient(circle at center, ${color} 0, rgba(180, 180, 180, 0) 50%)`,
      top: 'calc(20% - 20%)',
      left: 'calc(10% - 20%)',
      animation: 'moveRight 30s ease-in-out infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(150, 150, 150, 0.6) 0, rgba(150, 150, 150, 0) 50%)`,
      top: 'calc(30% - 15%)',
      left: 'calc(15% - 15%)',
      animation: 'moveRight 35s linear infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(200, 200, 200, 0.7) 0, rgba(200, 200, 200, 0) 50%)`,
      top: 'calc(50% - 10% + 100px)',
      left: 'calc(50% - 10% - 600px)',
      transformOrigin: 'calc(50% + 500px)',
      animation: 'moveInCircle 50s linear infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(120, 120, 120, 0.7) 0, rgba(120, 120, 120, 0) 50%)`,
      top: '10%',
      left: '5%',
      animation: 'moveRight 40s ease infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(180, 180, 180, 0.6) 0, rgba(180, 180, 180, 0) 50%)`,
      top: '40%',
      left: '10%',
      animation: 'moveRight 25s ease-in-out infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(100, 100, 100, 0.5) 0, rgba(100, 100, 100, 0) 50%)`,
      top: 'calc(50% - 20%)',
      left: 'calc(50% - 20%)',
      transformOrigin: 'center center',
      animation: 'moveInCircle 45s ease-in infinite'
    }
  ];

  return styles[index - 1] || {};
}

export default ParticlesBackground;