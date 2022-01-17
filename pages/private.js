import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function privateSection() {
const { data: session } = useSession();
if (session) {
    return (
    <>
        <h1 className=" text-center font-semibold text-5xl text-blue-500 mb-4">Parte privada</h1>
        <Link href="/">
        <a>Volver al inicio</a>
        </Link>
    </>
    );
}
return (
    <>
    <h1 className=" text-center font-semibold text-5xl text-blue-500 mb-4">Acceso denegado</h1>
    <p>Inicia sesión para acceder a esta página</p>
    <button className="btn" onClick={() => signIn()}>Sign in</button>
    <br></br>
    <Link href="/">
        <a>Volver al inicio</a>
    </Link>
    </>
);
}