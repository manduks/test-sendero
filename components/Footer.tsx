import classNames from 'classnames';

type FooterProps = {
  isIndex?: boolean;
};

export const Footer = (props: FooterProps) => {
  const footerStyles = classNames(
    'w-screen font-IBM-Plex-Mono text-slate-50',
    props.isIndex
      ? 'font-normal sm:text-sm tracking-wider absolute bottom-5 px-auto sm:text-end text-center sm:pr-10 text-xs'
      : 'py-16 px-24 bottom-0 -ml-11 bg-negro-claro text-2xl font-semibold'
  );

  return (
    <footer className={footerStyles}>
      2022 Sendero. Todos los derechos reservados
    </footer>
  );
};
