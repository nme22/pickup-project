import { auth, currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
   const { userId } = auth();
   const user = await currentUser();

   if (userId) {
      return (
         <main className="flex-col rounded-lg">
            <div className="flex-col content-center p-12 text-center h-fit w-400px">
               <h1 className="text-2xl text-white">
                  Welcome back {user?.username}!
               </h1>
               <div className="flex items-center justify-center w-full h-full p-2">
                  Throw Weath API forcast for the next 5 days here.
               </div>
            </div>
         </main>
      );
   } else {
      return <h1>Holy Cow we need to log you in!</h1>;
   }
}
