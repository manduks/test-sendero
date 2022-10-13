/* eslint-disable sort-imports */
import * as random from 'maath/random';

import { ArrowRightIcon, MailIcon } from '@heroicons/react/outline';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cloud, PointMaterial, Points } from '@react-three/drei';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';

import { Footer } from 'components/Footer';
import Image from 'next/image';
import type { NextPage } from 'next';
import ToastAlertCourse from 'components/Course/ToastAlertCourse';
import { WaitIcon } from 'components/Landing/WaitIcon';
import { useSendMail } from '../hooks/useSendMail';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Input = {
  email: string;
};

const userSchema = z.object({
  email: z.string().email({ message: 'The email is invalid.' }),
});

const Landing: NextPage = () => {
  const { handleSendEmail, status } = useSendMail();
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Input> = (data) => handleSendEmail(data.email);

  useEffect(() => {
    const localStorageValue = localStorage.getItem('emailSend');
    if (localStorageValue) {
      setIsEmailSent(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(userSchema) });

  return (
    <div className="relative">
      <div className="bg-animation" id="canvas-container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
          <Cloud position={[-4, -2, 0]} args={[3, 2]} />
          <Cloud position={[-4, 2, 0]} args={[3, 2]} />
          <Cloud args={[3, 2]} />
          <Cloud position={[4, -2, 0]} args={[3, 2]} />
          <Cloud position={[4, 2, 0]} args={[3, 2]} />
        </Canvas>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate3d(-50%,-50%,0)',
          }}
        >
          <div className="w-screen px-7 sm:px-0 flex sm:items-center flex-col text-slate-200">
            <h1 className="sm:text-[96px] sm:w-auto w-72 text-[56px] font-IBM-Plex-Mono font-bold tracking-[10px]">
              El camino del dev
            </h1>

            <p className="font-IBM-Plex-Mono font-medium text-base tracking-widest sm:hidden">
              Disponible diciembre 2022
            </p>

            <p className="tracking-[2px] font-semibold font-IBM-Plex-Sans text-[24px] hidden sm:block">
              Aprende las tecnologías que están cambiando el mundo{' '}
            </p>
          </div>
        </div>
        <div className="w-screen flex">
          <Footer isIndex />
        </div>
      </div>

      <div
        style={{ top: '60%' }}
        className="w-screen absolute flex flex-col items-center justify-center px-7"
      >
        {status === 'success' || isEmailSent === true ? (
          <h1 className="font-IBM-Plex-Sans text-vainilla font-semibold sm:text-2xl tracking-widest sm:mb-8">
            Gracias por tu interes en sendero, ¡Revisa tu email para una
            sorpresa!
          </h1>
        ) : (
          <form
            className="flex items-center relative"
            onSubmit={handleSubmit(onSubmit)}
          >
            <MailIcon className="w-[26px] hidden sm:block h-[22px] text-slate-50 z-10 absolute stroke-2 left-5" />
            <input
              className="sm:w-[550px] min-w-[360px] border border-solid border-lima py-4 sm:px-14 px-4 sm:text-[20px] text-xs font-semibold sm:font-light tracking[2px] bg-negro text-slate-400"
              placeholder="Ingresa tu email para recibir acceso anticipado"
              {...register('email')}
            />
            {status === 'loading' ? (
              <WaitIcon />
            ) : (
              <button className="absolute right-5">
                <ArrowRightIcon className="w-[26px] h-[22px] text-slate-50 z-10 stroke-2 hover:text-lima hover:w-[28px] hover:h-[24]" />
              </button>
            )}
          </form>
        )}

        <p className="font-IBM-Plex-Sans text-slate-50 mt-6 font-semibold text-lg tracking-widest sm:hidden">
          Aprende las tecnologías que están cambiando el mundo
        </p>

        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 max-w-[550px] sm:space-x-12 items-center sm:mt-16 mt-5">
          <div className="mx-auto">
            <Image
              src={'/technologies/Technology1.svg'}
              width={123}
              height={26}
              alt={'Company 1'}
            />
          </div>

          <div className="mx-auto">
            <Image
              src={'/technologies/Technology2.svg'}
              width={202}
              height={26}
              alt={'Company 2'}
            />
          </div>

          <div className="mx-auto">
            <Image
              src={'/technologies/Technology3.svg'}
              width={87}
              height={35}
              alt={'Company 3'}
            />
          </div>
        </div>

        {errors.email && (
          <ToastAlertCourse
            variant="error"
            message="Introduce un correo válido"
          />
        )}
        {status == 'success' && (
          <ToastAlertCourse
            variant="success"
            message="Te hemos enviado un correo"
          />
        )}
      </div>
    </div>
  );
};

export default Landing;

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#7B61FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
