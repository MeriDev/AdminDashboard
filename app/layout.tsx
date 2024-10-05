import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meri Press',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Navbar />
        <div className="flex h-full">
          <div className="hidden md:block w-[300px] h-screen">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:mx-w-[1140px] h-[100vh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
