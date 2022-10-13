import {
  Completion,
  CompletionContext,
  CompletionResult,
  autocompletion,
  completeFromList,
} from '@codemirror/autocomplete';
import { Diagnostic, linter } from '@codemirror/lint';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { Tooltip, hoverTooltip } from '@codemirror/tooltip';

import { EventEmitter } from '@okikio/emitter';
import debounce from 'lodash.debounce';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import debounceAsync from 'debounce-async';

export const codemirrorTypescriptExtensions = (
  tsServer: Worker,
  emitter: EventEmitter,
  filePath?: string
) => [
  EditorView.updateListener.of(
    debounce((update: ViewUpdate) => {
      tsServer.postMessage({
        event: 'updateText',
        details: {
          filePath,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          content: update.state.doc.text.join('\n'),
        },
      });
    }, 150)
  ),

  autocompletion({
    activateOnTyping: true,
    override: [
      debounceAsync(
        async (ctx: CompletionContext): Promise<CompletionResult | null> => {
          const { pos } = ctx;

          try {
            tsServer.postMessage({
              event: 'autocomplete-request',
              details: { pos, filePath },
            });

            const completions = await new Promise((resolve) => {
              emitter.on('autocomplete-results', (completions) => {
                resolve(completions);
              });
            });

            if (!completions) {
              console.log('Unable to get completions', { pos });
              return null;
            }

            return completeFromList(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              completions.entries.map((c) => {
                const suggestions: Completion = {
                  type: c.kind,
                  label: c.name,
                  // TODO:: populate details and info
                  boost: 1 / Number(c.sortText),
                };

                return suggestions;
              })
            )(ctx);
          } catch (e) {
            console.log('Unable to get completions', { pos, error: e });
            return null;
          }
        },
        200
      ),
    ],
  }),

  hoverTooltip(
    async (_: EditorView, pos: number): Promise<Tooltip | null> => {
      tsServer.postMessage({
        event: 'tooltip-request',
        details: { pos, filePath },
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { result: quickInfo, tootltipText } = await new Promise(
        (resolve) => {
          emitter.on('tooltip-results', (completions) => {
            resolve(completions);
          });
        }
      );

      if (!quickInfo) return null;

      return {
        pos,
        create() {
          const dom = document.createElement('div');
          dom.setAttribute('class', 'quickinfo-tooltip');
          dom.textContent = tootltipText;

          return { dom };
        },
      };
    },
    { hideOnChange: true }
  ),

  linter(
    async (): Promise<Diagnostic[]> => {
      tsServer.postMessage({
        event: 'lint-request',
        details: { filePath },
      });

      const diagnostics = (await new Promise((resolve) => {
        emitter.once('lint-results', (completions) => {
          resolve(completions);
        });
      })) as Diagnostic[];

      return diagnostics ? diagnostics : [];
    },
    { delay: 400 }
  ),
  EditorView.baseTheme({
    '.quickinfo-tooltip': {
      padding: '6px 3px 6px 8px',
      marginLeft: '-1px',
      borderLeft: '5px solid #999',
      backgroundColor: '#252525',
    },
    '.cm-tooltip-hover.cm-tooltip': {
      backgroundColor: '#252525',
    },
  }),
];
