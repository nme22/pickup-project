import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Pickup Soccer Project',
   description:
      'Have friends signup for pickup soccer games, choose teams, and keep track of scores!',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <Navbar />
         <body>{children}</body>
      </html>
   );
}
