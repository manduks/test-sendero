import {
  SandpackConsole,
  SandpackConsumer,
  SandpackFiles,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
  SandpackSetup,
  SandpackThemeProvider,
} from '@codesandbox/sandpack-react';

import Editor from './Editor';
import React from 'react';
import { sandpackDark } from '@codesandbox/sandpack-themes';

type mode = 'editor' | 'console' | 'preview';

function Sandpack({
  customSetup,
  template,
  files,
  mode = 'editor',
}: {
  customSetup: SandpackSetup;
  template: SandpackPredefinedTemplate;
  files: SandpackFiles;
  mode: mode;
}) {
  return (
    <SandpackProvider
      template={template}
      files={files}
      customSetup={customSetup}
    >
      <SandpackThemeProvider theme={sandpackDark}>
        <SandpackLayout>
          <SandpackConsumer>
            {(state) => <Editor activeFile={state?.activeFile} />}
          </SandpackConsumer>
          {['preview', 'console'].includes(mode) && (
            <>
              <SandpackPreview style={{ display: 'none' }} />
              <SandpackConsole />
            </>
          )}
        </SandpackLayout>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
}

export default React.memo(Sandpack);
