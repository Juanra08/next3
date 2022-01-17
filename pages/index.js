import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Page () {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Cerrar sesión</button>
        <Link href="private">
          <a>
            <h1>Parte privada</h1>
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="private">
        <a>
          <h2>Private section</h2>
        </a>
      </Link>
    </>
  );
}