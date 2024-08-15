import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function SettingPage() {
  const session = await auth();

  return (
    <div>
      <div>SettingPage</div>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <Button variant="secondary" type="submit">Sign out</Button>
      </form>
    </div>
  );
}
