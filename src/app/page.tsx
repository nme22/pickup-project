'use client';
import Link from 'next/link';

export default function Home() {
   return (
      <main className="flex-col rounded-lg">
         <div className="flex-col content-center p-12 text-center h-fit w-400px">
            <h1 className="text-2xl text-white">Welcome to SJ Pickup</h1>
            <p className="text-2xl text-white">
               An app designed to help organize pickup soccer games!
            </p>
            <div className="flex items-center justify-center w-full h-full p-2">
               <img
                  src="/Soccer_Field_Transparant.svg"
                  alt="Soccer Field"
                  className="object-center h-400px w-400px"
               />
            </div>

            <button
               type="button"
               className="rounded border-2 bg-gradient-to-l border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:from-emerald-400 hover:to-blue-400 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
               <Link href="/sign-in">Organize a Game!</Link>
            </button>
         </div>
      </main>
   );
}
