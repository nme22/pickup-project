import { currentUser } from '@clerk/nextjs';
import React, { useState } from 'react';

export default async function DashboardPage() {
   const user = await currentUser();
   const today = new Date();

   return (
      <main className="flex-col rounded-lg">
         <div className="flex-col content-center p-12 text-center h-fit w-400px">
            <h1 className="text-2xl text-white">
               Welcome back {user.username}!
            </h1>
            <p className="text-2xl text-white">
               Pickup weather for {today.toDateString()}:
            </p>
         </div>
      </main>
   );
}
