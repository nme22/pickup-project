import Link from 'next/link';

export default function Navbar() {
   return (
      <>
         <nav className="justify-between flex-1 text-white">
            <Link href="/">Home</Link>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Register</Link>
         </nav>
      </>
   );
}
