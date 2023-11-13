import Link from 'next/link';
import { auth, UserButton, SignOutButton } from '@clerk/nextjs';

export default function Navbar() {
   const { userId } = auth();
   // In case the user signs out while on the page.
   return (
      <nav>
         <div className="flex items-center justify-between">
            <Link href="/">
               <div className="text-lg font-bold text-white uppercase">
                  SJPickup
               </div>
            </Link>
            <div className="space-x-2 font-bold text-md">
               {!userId && (
                  <>
                     <Link
                        href="/sign-in"
                        className="text-white underline hover:text-green-200"
                     >
                        Sign In
                     </Link>

                     <Link
                        href="/sign-up"
                        className="text-white underline hover:text-green-200"
                     >
                        Sign Up
                     </Link>
                  </>
               )}
               <div className="flex items-center">
                  {userId && (
                     <Link
                        href="/profile"
                        className="mr-4 space-x-2 text-white underline hover:text-green-200"
                     >
                        Profile
                     </Link>
                  )}

                  <UserButton afterSignOutUrl="/" />
               </div>
            </div>
         </div>
      </nav>
   );
}
