import React from 'react';
import sdk from '@stackblitz/sdk';

export default function StackBlitz() {
  React.useEffect(() => {
    sdk.embedProjectId('editor', 'nextjs-qeifp6', {
      forceEmbedLayout: true,
      openFile: 'pages/_app.js',
      view: 'editor',
      hideNavigation: false,
    });
  }, []);

  return (
    <div
      id="editor"
      className="border-solid border-vainilla border-[1px] h-full w-full"
    ></div>
  );
}
