import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize(): {
  windowSize: WindowSize;
  isMobile: boolean;
  isDesktop: boolean;
  deviceType: string | undefined;
} {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  const [deviceType, setDeviceType] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Only access navigator if it's defined (i.e., in the browser)
    if (typeof navigator !== 'undefined') {
      setDeviceType(navigator.userAgent);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile =
    typeof windowSize?.width === 'number' && windowSize?.width < 768;
  const isDesktop =
    typeof windowSize?.width === 'number' && windowSize?.width >= 768;

  return { windowSize, isMobile, isDesktop, deviceType };
}
