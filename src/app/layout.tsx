import './globals.css';
import type { Metadata } from 'next';
import { ClerkProvider, auth, currentUser } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
               <main className="container">
                  <div className="flex items-start justify-center min-h-screen">
                     <div className="mt-20">{children}</div>
                  </div>
               </main>
               <Footer />
            </body>
         </html>
      </ClerkProvider>
   );
}
