import Navbar from '../../components/Navbar';
export default function Home() {
   return (
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
         <Navbar />
         <div>
            <h1 className="text-2xl text-white">Welcome to SJ Pickup</h1>
            <p className="text-2xl text-white">
               An app designed to help organize pickup soccer games!
            </p>
         </div>
      </main>
   );
}
