import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className="flex justify-around p-2 font-semibold text-white underline">
         <Link
            href="/"
            className="rounded bg-gradient-to-l hover:from-emerald-400 hover:to-blue-400"
         >
            Home
         </Link>
         <Link
            href="/sign-in"
            className="rounded bg-gradient-to-l hover:from-emerald-400 hover:to-blue-400"
         >
            Sign In
         </Link>
         <Link
            href="/sign-up"
            className="rounded bg-gradient-to-l hover:from-emerald-400 hover:to-blue-400"
         >
            Register
         </Link>
      </nav>
   );
}
