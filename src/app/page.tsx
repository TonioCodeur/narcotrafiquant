import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">Narcotrafiquant</h1>
      <p className="max-w-xl text-lg opacity-80">
        Plongez dans l&apos;univers sombre (et fictif) du trafic&nbsp;! Bâtissez votre
        empire, affrontez vos rivaux et devenez le numéro&nbsp;1. L&apos;interface gère
        automatiquement le mode clair / sombre.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition-colors"
        >
          Se connecter / Jouer
        </Link>
        <Link
          href="/conditions"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Conditions de jeu
        </Link>
      </div>
    </main>
  );
}
