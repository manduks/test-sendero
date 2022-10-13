import { atom, useAtom } from 'jotai';

const isInView = atom<Record<'code', boolean>>({
  code: false,
});

export function useInViewAtom() {
  return useAtom(isInView);
}
