import { useEffect, useRef } from 'react';
import { Confetti } from 'components/Congrats/Helpers/Confetti';

export const ConfettiAnimation = () => {
  const ref = useRef<any>();

  useEffect(() => {
    const confetti = new Confetti('confetti') as any;

    confetti.setCount(750);
    confetti.setSize(1);
    confetti.setPower(50);
    confetti.setFade(false);
    confetti.destroyTarget(true);

    const id = setTimeout(() => {
      ref.current.click();
    }, 200);

    return () => clearTimeout(id);
  }, []);

  return <div id="confetti" ref={ref}></div>;
};
