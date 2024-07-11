
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Satisfy, Lato } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/globals.css';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
});

export const metadata: Metadata = {
  title: 'Ocean Safaris',
  description: 'Find your boat with the best experience.',
  icons: ['/images/logo.svg'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <ClerkProvider
    appearance={{
      layout: {
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'iconButton',
        termsPageUrl: 'https://clerk.com/terms'
      }
    }}
    >
      <html lang="en" className={clsx('h-full font-lato antialiased', satisfy.variable,lato.variable,)}>
        <body className="flex min-h-full flex-col">
          {children}
          
        </body>
      </html>
   </ClerkProvider>
  );
}
