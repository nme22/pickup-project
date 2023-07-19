import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className="flex flex-row gap-5 pt-10 pr-10 text-white">
         <Link className="text-white" href="/sign-up">
            Register
         </Link>
         <Link className="text-white" href="/sign-in">
            Sign In
         </Link>
      </nav>
   );
}
