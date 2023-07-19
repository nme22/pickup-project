import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
   return (
      <main className="flex items-center justify-center h-screen">
         <SignIn afterSignInUrl="/dashboard" />
      </main>
   );
}
