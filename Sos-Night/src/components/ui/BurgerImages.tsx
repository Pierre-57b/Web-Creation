import { useState, useEffect } from 'react';
import burgerLeft from '../../assets/burger-left.png';
import burgerRight from '../../assets/burger-right.png';

export function BurgerImages() {
  const [scrollY, setScrollY] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const leftImage = new Image();
    const rightImage = new Image();
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setImagesLoaded(true);
      }
    };

    leftImage.src = burgerLeft;
    rightImage.src = burgerRight;
    leftImage.onload = handleLoad;
    rightImage.onload = handleLoad;
  }, []);

  if (!imagesLoaded) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div 
        className="absolute left-1/4 transform -translate-x-1/2"
        style={{
          top: `${Math.max(20, 50 + scrollY * 0.1)}%`,
          transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src={burgerLeft}
          alt="Burger flottant"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>
      <div 
        className="absolute right-1/4 transform translate-x-1/2"
        style={{
          top: `${Math.max(20, 50 + scrollY * 0.1)}%`,
          transform: `translate(50%, -50%) rotate(-${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src={burgerRight}
          alt="Burger flottant"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>
    </div>
  );
}