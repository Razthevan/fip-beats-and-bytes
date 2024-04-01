import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const libre = Libre_Franklin({
  weight: 'variable',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FIP bits and bytes',
  description: 'Sharing my current FIP Radio groove and a bit about myself',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={libre.className}>
        <main className="flex min-h-screen flex-col items-center py-24 lg:px-80 px-10 bg-neutral-800 text-white dark">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
