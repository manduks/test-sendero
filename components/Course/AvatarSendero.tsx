import * as AvatarPrimitive from '@radix-ui/react-avatar';

import classNames from 'classnames';

type AvatarSenderoProps = {
  urlImage?: string;
};

const rootStyles = classNames(
  'inline-flex items-center justify-center align-middle overflow-hidden select-none w-[45px] h-[45px] rounded-full bg-negro'
);
const fallbackStyles = classNames(
  'w-full h-full flex items-center justify-center bg-negro text-vainilla text-base leading-none font-medium'
);
const imageStyles = classNames('w-full h-full object-cover rounded-full');

const AvatarSendero = (props: AvatarSenderoProps) => (
  <div className="flex gap-5">
    <AvatarPrimitive.Root className={rootStyles}>
      <AvatarPrimitive.Image
        className={imageStyles}
        src={props.urlImage}
        alt="Imágen de perfil"
      />
      <AvatarPrimitive.Fallback className={fallbackStyles} delayMs={600}>
        CT
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  </div>
);

export default AvatarSendero;
