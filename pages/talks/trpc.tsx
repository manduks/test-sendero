import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Armando from 'components/Card/Armando';
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { CH } from '@code-hike/mdx/dist/components.cjs.js';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import Split from 'react-split';
import ToggleView from 'components/ToggleView';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';
import { remarkCodeHike } from '@code-hike/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import theme from 'shiki/themes/material-ocean.json';
import { useInViewAtom } from 'atoms/inViewAtom';

const Sandpack = dynamic(() => import('components/Sandpack'), {
  //suspense: true,
  ssr: false,
});

export const getServerSideProps: GetServerSideProps = async () => {
  const mdxPath = path.join(process.cwd(), 'mdx/talks/trpc.mdx');
  const source = fs.readFileSync(mdxPath) as unknown as string;

  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
      useDynamicImport: true,
    },
  });
  return {
    props: {
      source: mdxSource,
      vertical: false,
    },
  };
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Trpc({ source }: PageProps) {
  const [inView] = useInViewAtom();
  const startCoding = inView.code;

  return (
    <div className="bg-negro-claro h-[100vh]">
      <Head>
        <title>Sendero - tRPC</title>
        <meta
          name="description"
          content="tRPC - APIs rápidas con Typrescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={classNames(
          !startCoding && 'pt-24',
          'pl-4 pr-2 bg-negro-claro text-slate-50 h-screen w-screen'
        )}
      >
        <Split
          className={classNames('flex', 'flex-row')}
          sizes={startCoding ? [50, 50] : [100, 0]}
          minSize={0}
          expandToMin={false}
          gutterSize={12}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction={'horizontal'}
          cursor={'col-resize'}
        >
          <div
            id="mdx"
            className={classNames('overflow-y-auto', 'h-[calc(100vh_-_128px)]')}
          >
            <Armando />

            <MDXRemote
              {...source}
              components={{ CH, Armando, ToggleView, Sandpack }}
            />
          </div>
          <div
            className={classNames(
              startCoding ? 'h-[100vh]' : 'h-[calc(100vh_-_128px)]'
            )}
          >
            <iframe
              src="https://codesandbox.io/p/github/manduks/trpc-talk/draft/eloquent-dhawan?file=%2Fpages%2Fapi%2Fhello.ts&workspace=%257B%2522activeFileId%2522%253A%2522cl91zffo2000clsgld2wp9ttj%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl91zfrvw007q3b6khk5tod6f%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522cl91zfq0e004c3b6kz8y2z59g%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D"
              className="w-[100%] h-full "
              title="objective-sun-rvwyob"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </Split>
      </div>
    </div>
  );
}
