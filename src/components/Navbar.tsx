import Link from 'next/link';

export default function Navbar() {
   // if user is not logged in
   return (
      <nav className="flex justify-around p-2 font-semibold text-white underline">
         <a
            href="/"
            className="rounded bg-gradient-to-l hover:from-emerald-400 hover:to-blue-400"
         >
            Home
         </a>
         <a
            href="/sign-in"
            className="rounded bg-gradient-to-l hover:from-emerald-400 hover:to-blue-400"
         >
            Sign In
         </a>
         <a
            href="/sign-up"
            className="rounded bg-gradient-to-l hover:from-emerald-400 hover:to-blue-400"
         >
            Register
         </a>
      </nav>
   );
}
