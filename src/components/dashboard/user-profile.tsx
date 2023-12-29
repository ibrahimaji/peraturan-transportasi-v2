import { getSession } from '@auth0/nextjs-auth0';
import { setTimeout } from 'timers/promises';
import { DialogButton } from './dialogButton';
import { Button } from '../ui/button';

export async function UserProfile() {
  const session = await getSession();
  if (session?.user) {
    await setTimeout(3000);
  }
  return (
    <div>
      {session?.user ? (
        <div className="flex items-center gap-[28px]">
          <DialogButton />
          <div>Hello admin!</div>
          <Button asChild>
            <a href="/api/auth/logout" className="bg-[#3498db] font-poppins text-[#FFF] ">Keluar</a>
          </Button>
        </div>
      ) : (
        <Button asChild>
          <a href="/api/auth/login" className="bg-[#3498db] font-poppins text-[#FFF] ">Masuk</a>
        </Button>
      )}
    </div>
  );
}
