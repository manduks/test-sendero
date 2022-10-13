/* eslint-disable sort-imports */
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { CH } from '@code-hike/mdx/dist/components.cjs.js';
import { Demo } from 'components/Demo';
import { GetServerSideProps } from 'next';
import Split from 'react-split';
import StackBlitz from 'components/StackBlitz';
import classNames from 'classnames';
import fs from 'fs';
import path from 'path';
import { remarkCodeHike } from '@code-hike/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import theme from 'shiki/themes/material-ocean.json';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';

export const getServerSideProps: GetServerSideProps = withPageAuth({
  redirectTo: '/',
  async getServerSideProps() {
    const mdxPath = path.join(process.cwd(), 'mdx/test.mdx');
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
  },
});

export default function Lesson({
  source,
  vertical,
}: {
  source: MDXRemoteSerializeResult;
  vertical: boolean;
}) {
  return (
    <div className="pt-16 pl-4 pr-2 bg-negro-claro text-slate-50 h-screen w-screen">
      <Split
        className={classNames(
          'flex',
          vertical ? 'flex-col h-full' : 'flex-row'
        )}
        sizes={vertical ? [40, 60] : [50, 50]}
        minSize={vertical ? 100 : 100}
        expandToMin={false}
        gutterSize={12}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction={vertical ? 'vertical' : 'horizontal'}
        cursor={vertical ? 'row-resize' : 'col-resize'}
      >
        <div
          className={classNames(
            'overflow-y-auto',
            vertical ? 'w-full' : 'h-[calc(100vh_-_128px)]'
          )}
        >
          <MDXRemote {...source} components={{ CH, Demo }} />
        </div>
        <div className={classNames(vertical ? '' : 'h-[calc(100vh_-_128px)]')}>
          <StackBlitz></StackBlitz>
        </div>
      </Split>
    </div>
  );
}
