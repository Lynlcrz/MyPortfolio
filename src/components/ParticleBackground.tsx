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
    <div style={{
      width: '100%',
      height: '60vh',
      margin: 0,
      padding: 0,
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: '0 0 15rem 15rem',
      background: 'linear-gradient(40deg,rgb(38, 48, 63),rgb(39, 48, 70))',
      top: 0,
      left: 0,
      boxShadow: 'inset 0 -30px 25px rgba(0, 0, 0, 0.5)', 
      zIndex: 1
    }}>
      <svg style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0 }}>
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

     <h1 style={{
        zIndex: 100,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderRight: '3px solid rgba(255, 255, 255, 0.6)',
        animation: 'typing 3s steps(20, end) infinite alternate, blink 0.75s step-end infinite',
        height: '100vh',
        position: 'absolute',
        top: '19%',
        left: '15%',
        fontSize: '6vw',
        color: 'white',
        opacity: 0.3,
        textShadow: '1px 1px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Dongle', sans-serif",
        margin: 0
      }}>
        Hi, I'm Niel
      </h1>

      <h3 style={{
        zIndex: 100,
        position: 'absolute',
        fontSize: '2vw',
        top: '45%',
        left: '15%',
        color: 'white',
        opacity: 0.3,
        textShadow: '1px 1px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Dongle', sans-serif",
        margin: 0
      }}>
        Lyniel Cris S. Aya-ay
      </h3>


      <div style={{
        filter: 'url(#goo) blur(40px)',
        width: '100%',
        height: '100%',
        boxShadow: '0 30px 25px rgba(0, 0, 0, 0.5)'
      }}>
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            mixBlendMode: 'overlay',
            width: '20%',
            height: '20%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '50%',
            ...getGradientStyle(i + 1)
          }} />
        ))}
        <div ref={interactiveRef} style={{
          position: 'absolute',
          background: 'radial-gradient(circle at center, rgba(220, 220, 220, 0.8) 0, rgba(220, 220, 220, 0) 50%) no-repeat',
          mixBlendMode: 'overlay',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: 1,
          zIndex: 101,
          transform: 'translate(-50%, -50%)'
        }}></div>
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        {children}
      </div>

      <style>{`


  @keyframes typing {
    from { width: 0; }
    to { width: 15ch; }
  }

  @keyframes blink {
    0% { border-color: transparent; }
  }

        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes moveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes moveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
  @media (max-width: 768px) {
          h1 {
            font-size: 12vw !important;
            top: 10% !important;
            left: 5% !important;
          }
          h3 {
            font-size: 6vw !important;
            top: 40% !important;
            left: 5% !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 12vw !important;
            top: 20% !important;
            left: 21% !important;
          }
          h3 {
            font-size: 5vw !important;
            top: 35% !important;
            left: 28% !important;
          }
        }
      `}</style>
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
      width: '40%',
      height: '40%',
      top: 'calc(20% - 20%)',
      left: 'calc(10% - 20%)',
      animation: 'moveRight 30s ease-in-out infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(150, 150, 150, 0.6) 0, rgba(150, 150, 150, 0) 50%)`,
      width: '30%',
      height: '30%',
      top: 'calc(30% - 15%)',
      left: 'calc(15% - 15%)',
      animation: 'moveRight 35s linear infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(200, 200, 200, 0.7) 0, rgba(200, 200, 200, 0) 50%)`,
      width: '24%',
      height: '24%',
      top: 'calc(50% - 10% + 100px)',
      left: 'calc(50% - 10% - 600px)',
      transformOrigin: 'calc(50% + 500px)',
      animation: 'moveInCircle 50s linear infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(120, 120, 120, 0.7) 0, rgba(120, 120, 120, 0) 50%)`,
      width: '40%',
      height: '40%',
      top: '10%',
      left: '5%',
      animation: 'moveRight 40s ease infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(180, 180, 180, 0.6) 0, rgba(180, 180, 180, 0) 50%)`,
      width: '36%',
      height: '36%',
      top: '40%',
      left: '10%',
      animation: 'moveRight 25s ease-in-out infinite'
    },
    {
      background: `radial-gradient(circle at center, rgba(100, 100, 100, 0.5) 0, rgba(100, 100, 100, 0) 50%)`,
      width: '30%',
      height: '30%',
      top: 'calc(50% - 20%)',
      left: 'calc(50% - 20%)',
      transformOrigin: 'center center',
      animation: 'moveInCircle 45s ease-in infinite'
    }
  ];

  return styles[index - 1] || {};
}

export default ParticlesBackground;