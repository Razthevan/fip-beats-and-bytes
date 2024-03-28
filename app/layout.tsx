import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
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
      <body className={libre.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
