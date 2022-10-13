import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: string;
};

export const Button = (props: ButtonProps) => {
  const { variant, children, ...rest } = props;

  const buttonStyles = classNames(
    'w-full border border-solid h-16 rounded tracking-widest flow',
    variant === 'white'
      ? 'border-negro bg-slate-50 text-negro font-semibold font-IBM-Plex-Sans text-base'
      : null,
    variant === 'dark'
      ? 'border-lima bg-negro text-slate-50 font-semibold font-IBM-Plex-Sans text-base'
      : null,
    variant === 'blue'
      ? 'bg-gradient-to-r border-lima from-negro to-azul-fuerte text-slate-50 font-semibold font-IBM-Plex-Sans text-base'
      : null,
    variant === 'github'
      ? 'border-lima bg-negro text-slate-50 font-medium font-IBM-Plex-Mono h-11 text-xs text-slate-50 rounded-none'
      : null
  );

  return (
    <button {...rest} className={buttonStyles}>
      <div className="flex justify-center items-center">
        {variant === 'github' && (
          <div className="mr-2">
            <Image
              src={'/invoice/Github-Logo.svg'}
              width={24}
              height={24}
              alt="GitHub logo"
            />
          </div>
        )}
        {children}
      </div>
    </button>
  );
};
