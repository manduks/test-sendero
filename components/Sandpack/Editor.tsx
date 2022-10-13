import { SandpackCodeEditor, useSandpack } from '@codesandbox/sandpack-react';
import { memo, useEffect, useMemo, useRef } from 'react';

import { EventEmitter } from '@okikio/emitter';
import { codemirrorTypescriptExtensions } from './codemirror-extensions';

function Editor({ activeFile }: { activeFile?: string }) {
  const tsServer = useRef(
    new Worker(new URL('/workers/tsserver.js', window.location.origin), {
      name: 'ts-server',
    })
  );
  const emitter = useRef(new EventEmitter());
  const { sandpack } = useSandpack();

  useEffect(function listener() {
    const serverMessageCallback = ({
      data: { event, details },
    }: MessageEvent<{ event: string; details: any }>) => {
      emitter.current.emit(event, details);
    };

    tsServer.current.addEventListener('message', serverMessageCallback);

    return () => {
      tsServer.current.removeEventListener('message', serverMessageCallback);
    };
  }, []);

  useEffect(function init() {
    emitter.current.on('ready', () => {
      const getTypescriptCache = () => {
        const cache = new Map();
        const keys = Object.keys(localStorage);

        keys.forEach((key) => {
          if (key.startsWith('ts-lib-')) {
            cache.set(key, localStorage.getItem(key));
          }
        });

        return cache;
      };

      tsServer.current.postMessage({
        event: 'create-system',
        details: {
          files: sandpack.files,
          entry: sandpack.activeFile,
          fsMapCached: getTypescriptCache(),
        },
      });
    });

    emitter.current.on(
      'cache-typescript-fsmap',
      ({ version, fsMap }: { version: string; fsMap: Map<string, string> }) => {
        fsMap.forEach((file, lib) => {
          const cacheKey = 'ts-lib-' + version + '-' + lib;
          localStorage.setItem(cacheKey, file);
        });
      }
    );
  }, []);

  const extensions = useMemo(
    () =>
      codemirrorTypescriptExtensions(
        tsServer.current,
        emitter.current,
        activeFile
      ),
    [tsServer, emitter, activeFile]
  );

  return <SandpackCodeEditor showTabs extensions={extensions} />;
}
export default memo(Editor);
