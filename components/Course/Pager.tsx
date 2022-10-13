import Link from 'next/link';

type PagerProps = {
  previusRef: string;
  nextRef: string;
};

export const Pager = (props: PagerProps) => {
  const { previusRef, nextRef } = props;

  return (
    <div className="flex justify-between items-center h-8 bg-negro-claro w-full ">
      <Link href={previusRef}>
        <a className="font-IBM-Plex-Sans font-bold text-base tracking-widest text-azul-claro">
          {'<<'}Anterior
        </a>
      </Link>
      <Link href={nextRef}>
        <a className="font-IBM-Plex-Sans font-bold text-base tracking-widest text-azul-claro">
          Siguiente{'>>'}
        </a>
      </Link>
    </div>
  );
};
