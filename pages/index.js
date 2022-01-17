import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Page () {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        <p className="font-semibold text-3xl text-blue-500 mb-4">Signed in as <span className="font-semibold text-3xl text-gray-500 mb-4" >{session.user.email}</span></p> <br />
        <button className="btn" onClick={() => signOut()}>Cerrar sesión</button>
        <h1 className=" text-center font-semibold text-5xl text-blue-500 mb-4">Parte publica</h1>
        <Link href="private">
          <a>
            <h1 className="font-semibold text-2xl text-black mb-4" >Parte privada</h1>
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      <button className="btn" onClick={() => signIn()}>Sign in</button>
      <h1 className=" text-center font-semibold text-5xl text-blue-500 mb-4">Parte publica</h1>
      <Link href="private">
        <a>
          <h2 className="font-semibold text-2xl text-black mb-4">Parte privada</h2>
        </a>
      </Link>
    </>
  );
}