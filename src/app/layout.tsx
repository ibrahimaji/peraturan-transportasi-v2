import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@/styles/globals.css';
import { twMerge } from 'tailwind-merge';
import { Providers } from '@/components/providers';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Navbar } from '@/components/dashboard/navbar';
import { Footer } from '@/components/dashboard/footer';
import { Toaster } from '@/components/ui/toaster';

const fontSans = FontSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kumpulan Peraturan Transportasi',
  description: 'Peraturan Transportasi Republik Indonesia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={twMerge(fontSans.className)}>
          <Navbar />
          <Providers>{children}</Providers>
          <Toaster />
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
