import Link from 'next/link';

export default function Footer() {
   return (
      <nav className="sticky bottom-0 justify-between text-zinc-50">
         <Link href="/">Twitter</Link>
         <Link href="/sign-in">Github</Link>
         <Link href="/sign-up">Meetup</Link>
      </nav>
   );
}
