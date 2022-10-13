// eslint-disable-next-line sort-imports
import '@code-hike/mdx/dist/index.css';
import '../styles/globals.css';
import '../styles/custom.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import { NavBar } from 'components/NavBar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps<{ initialSession: any }>) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <NavBar
          isLogin={router.pathname === '/login'}
          isLesson={router.pathname === '/lesson'}
          isIndex={['/', '/talks/trpc'].includes(router.pathname)}
          isLanding={router.pathname === '/nextjs'}
        />
        <Component {...pageProps} />
      </SessionContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
