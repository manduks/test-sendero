import { useEffect, useRef, useState } from 'react';

export function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useRef<any>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      {
        // threshold: 1.0,
      }
    );
  }, []); // do this only once, on mount

  useEffect(() => {
    observer.current.observe(ref.current);

    return () => {
      observer.current.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
