import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className="flex justify-around p-2 font-semibold text-purple-500">
         <Link href="/" className="border-2 border-purple-500 rounded">
            Home
         </Link>
         <Link href="/sign-in" className="border-2 border-purple-500 rounded">
            Sign In
         </Link>
         <Link href="/sign-up" className="border-2 border-purple-500 rounded">
            Register
         </Link>
      </nav>
   );
}
