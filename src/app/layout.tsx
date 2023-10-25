import './globals.css';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

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
      <ClerkProvider>
         <html lang="en">
            <body className="w-screen h-screen">
               <Navbar />
               {children}
            </body>
         </html>
      </ClerkProvider>
   );
}
