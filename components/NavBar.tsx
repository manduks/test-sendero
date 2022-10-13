import AvatarSendero from './Course/AvatarSendero';
import { Button } from './Button';
import { BuyButton } from './BuyButton';
import Image from 'next/image';
import Link from 'next/link';
import { ProgressBar } from './Course/ProgressBar';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type NavBarProps = {
  isLogin?: boolean;
  isLesson?: boolean;
  isIndex?: boolean;
  isLanding?: boolean;
};

export const NavBar = (props: NavBarProps) => {
  const router = useRouter();
  const isLanding = router.pathname === '/landing';

  const NavBarStyles = classNames(
    'w-full left-0 fixed flex justify-between z-50 items-center',
    props.isLesson === true ? 'bg-negro-claro h-14 text-slate-50' : null,
    props.isLogin || props.isLanding ? 'bg-[#FFFFFF] py-7' : null,
    props.isIndex === true ? 'text-slate-50 mt-5' : null
  );

  return (
    <nav
      className={NavBarStyles}
      style={{ backgroundColor: isLanding ? 'transparent' : '' }}
    >
      <Link href="/">
        <a className="flex space-x-2 items-center ml-6 cursor-pointer">
          <Image
            src={require('../public/Sendero-Logo.svg')}
            width={props.isLesson ? 32 : 63}
            height={props.isLesson ? 32 : 63}
            alt={'Sendero logo'}
          />
          <span className="font-Inter font-bold text-3xl tracking-widest">
            ENDERO
          </span>
        </a>
      </Link>
      {props.isLogin && (
        <BuyButton buttonLegend="Comprar curso" buttonStyles="w-72 mr-12" />
      )}
      {props.isLesson && (
        <div className="flex items-center space-x-14 mr-6">
          <div className=" w-72">
            <ProgressBar percent="45" />
          </div>
          <AvatarSendero urlImage="https://picsum.photos/36?1" />
        </div>
      )}
      {props.isIndex && (
        <div className="sm:flex hidden space-x-6 w-[550px] mr-12 justify-end text-[16px] tracking-[5px]">
          Disponible Enero 2023
        </div>
      )}
      {props.isLanding && (
        <div className="flex space-x-6 w-[550px] mr-12">
          <div className="w-1/2">
            <Button variant="white" onClick={() => router.push('/login')}>
              Ingresar
            </Button>
          </div>
          <BuyButton buttonLegend="Comprar curso" buttonStyles="w-1/2" />
        </div>
      )}
    </nav>
  );
};
