import { useEffect, useRef } from 'react';

import { useInViewAtom } from 'atoms/inViewAtom';
import { useIsInViewport } from 'hooks/useIsInViewport';

export default function ToggleView({ id }: { id: string }) {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsInViewport(ref1);
  const [values, setInview] = useInViewAtom();

  useEffect(() => {
    if (isVisible) {
      setInview({
        ...values,
        [id]: isVisible,
      });
    }
  }, [id, isVisible, setInview, values]);

  return <div ref={ref1} />;
}
