"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4 text-center">
      <h1 className="text-3xl font-bold">Connexion</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          href="/api/auth/github"
          className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Se connecter avec GitHub
        </Link>
        <Link
          href="/api/auth/google"
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition-colors"
        >
          Se connecter avec Google
        </Link>
      </div>
    </div>
  );
}