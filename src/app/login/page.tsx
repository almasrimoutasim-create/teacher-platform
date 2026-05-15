"use client";

import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { signIn, type SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    (async () => {
      const res = (await signIn("credentials", { redirect: false, email, password })) as
        | SignInResponse
        | undefined;
      if (res?.error) {
        setError(res.error || "Invalid credentials");
        return;
      }
      const callbackUrl = new URLSearchParams(window.location.search).get("callbackUrl");
      router.replace(callbackUrl || "/dashboard");
    })();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-2 text-center">Sign in to your account</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Enter your email and password to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your password"
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="h-4 w-4 text-blue-600" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <a className="text-sm text-blue-600 hover:underline" href="#">Forgot?</a>
          </div>

          <div className="pt-4">
            <Button>Sign in</Button>
          </div>
        </form>

        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={() => signIn("github")}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="mr-2">
              <path fill="currentColor" d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.8 2 .1 2.5-.7.4-1.6.1-2-.1.2-.5.7-1.2 1.3-1.4-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.7.6 1.3 1.6 1.3 3.2v4.7c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8C23.2 5.4 18.3.5 12 .5z"/>
            </svg>
            Sign in with GitHub
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account? <a className="text-blue-600 hover:underline" href="/signup">Create one</a>
        </div>
      </div>
    </div>
  );
}
