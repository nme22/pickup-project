import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="bottom-0 flex justify-between p-1 m-3 inherit text-zinc-50">
         <Link href="/">Twitter</Link>
         <Link href="/">Github</Link>
         <Link href="/">Meetup</Link>
      </footer>
   );
}
