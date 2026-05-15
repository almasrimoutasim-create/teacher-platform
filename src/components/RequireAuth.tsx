"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      const callback = encodeURIComponent(window.location.pathname);
      router.push(`/login?callbackUrl=${callback}`);
    }
  }, [status, router]);

  if (status === "loading") return null;
  if (status === "authenticated") return <>{children}</>;
  return null;
}
