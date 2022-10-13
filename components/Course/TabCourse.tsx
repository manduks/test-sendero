import * as TabsPrimitive from '@radix-ui/react-tabs';

import { CheckIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

const rootStyles = classNames('w-screen flex flex-col');
const listStyles = classNames('flex w-min');
const contentStyles = classNames(
  'flex-grow p-5 bg-negro-claro rounded-b-md rounded-bl-md outline-none focus:shadow-sm'
);
const triggerStyles = classNames(
  'bg-negro-claro focus:text-azul-fuerte px-5 h-[45px] flex flex-1 items-center justify-center text-base leading-none text-gris first:rounded-tl-md last:rounded-tr-md'
);

const TabsCourse = () => (
  <div className="flex flex-col">
    <TabsPrimitive.Root className={rootStyles} defaultValue="tab1">
      <TabsPrimitive.List className={listStyles}>
        <TabsPrimitive.Trigger className={triggerStyles} value="tab1">
          Temario
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger className={triggerStyles} value="tab2">
          Introducción
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>

      <TabsPrimitive.Content className={contentStyles} value="tab1">
        <div className="flex space-x-2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <CheckIcon className="absolute text-azul-claro" />
              <div className="w-8 h-8 rounded-full bg-slate-50" />
            </div>
            <div className="h-[105px] border-l-[1px] border-azul-claro border-solid" />
            <div className="flex justify-center items-center relative">
              <h1 className="font-IBM-Plex-Mono absolute text-slate-50 font-bold text-sm">
                2
              </h1>
              <div className="w-8 h-8 rounded-full bg-azul-claro" />
            </div>
            <div className=" h-64 border-l-[1px] border-azul-claro border-solid" />
            <div className="flex justify-center items-center relative">
              <h1 className="font-IBM-Plex-Mono absolute text-azul-claro font-bold text-sm">
                3
              </h1>
              <div className="w-8 h-8 rounded-full bg-slate-50" />
            </div>
          </div>
          <div className=" w-[60%]">
            <h1 className="font-IBM-Plex-Mono text-base text-slate-50 font-bold tracking-widest mb-4">
              Aprende Nextjs
            </h1>
            <p className="font-IBM-Plex-Sans font-normal text-base text-slate-50 tracking-widest max-w-screen-sm">
              The first feature well build for the app will fetch a (mocked)
              list of learning tracks from a GraphQL API and display them in a
              card grid on our homepage.
            </p>
            <div className="mt-7 ml-3 space-y-4">
              <h1 className="font-IBM-Plex-Mono font-bold text-sm text-azul-claro tracking-widest">
                Introducción
              </h1>
              <p className="font-IBM-Plex-Mono font-normal text-sm tracking-widest leading-4 text-slate-50">
                The first feature well build for the app will fetch a (mocked)
                list of learning tracks from a GraphQL API and display them in a
                card grid on our homepage.
              </p>
            </div>
            <div className="ml-5 mt-3 space-y-3">
              <div className="space-y-3">
                <h1 className="font-IBM-Plex-Mono font-bold text-xs tracking-widest text-azul-claro">
                  Configuración
                </h1>
                <p className="font-IBM-Plex-Sans font-normal text-xs tracking-widest text-slate-50">
                  The first feature well build for the app will fetch a (mocked)
                  list of learning tracks from a GraphQL API and display them in
                  a card grid on our homepage.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-IBM-Plex-Mono font-bold text-xs tracking-widest text-slate-50">
                  Prettier
                </h2>
                <p className="font-IBM-Plex-Sans font-normal text-xs tracking-widest text-slate-50">
                  The first feature well build for the app will fetch a (mocked)
                  list of learning tracks from a GraphQL API and display them in
                  a card grid on our homepage.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-IBM-Plex-Mono font-bold text-xs tracking-widest text-slate-50">
                  Typescript
                </h2>
                <p className="font-IBM-Plex-Sans font-normal text-xs tracking-widest text-slate-50">
                  The first feature well build for the app will fetch a (mocked)
                  list of learning tracks from a GraphQL API and display them in
                  a card grid on our homepage.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <h1 className="font-IBM-Plex-Mono text-slate-50 font-bold text-sm tracking-widest">
                Creación de componentes
              </h1>
              <p className="font-IBM-Plex-Sans  text-slate-50 font-normal text-sm tracking-widest">
                The first feature well build for the app will fetch a (mocked)
                list of learning tracks from a GraphQL API and display them in a
                card grid on our homepage.
              </p>
            </div>
          </div>
        </div>
      </TabsPrimitive.Content>
      <TabsPrimitive.Content className={contentStyles} value="tab2">
        <h1 className="font-IBM-Plex-Mono text-base text-slate-50 font-bold tracking-widest mb-4">
          Introducción
        </h1>
        <p className="font-IBM-Plex-Sans font-normal text-base text-slate-50 tracking-widest max-w-screen-sm">
          Este contenido es para poder visualizar como trabaja el Tab que nos
          proporciona Radix, para ello voy a meter texto random como si fuera
          Lorem Ippsum
        </p>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  </div>
);

export default TabsCourse;
