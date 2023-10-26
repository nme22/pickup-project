export default function Navbar() {
   // In case the user signs out while on the page.

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
            Sign Up
         </a>
      </nav>
   );
}
