// pages/_app.tsx
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  // Component is the current page (e.g., pages/index.tsx)
  // pageProps are data props fetched for that page
  
  return (
    // This is where to place global wrappers, contexts, or layouts.
    // For now, it just renders the current page.
    <Component {...pageProps} />
  );
}

export default MyApp;