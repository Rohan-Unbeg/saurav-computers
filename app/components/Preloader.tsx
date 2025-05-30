"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background flex justify-center items-center z-[9999]">
      <div className="w-10 h-10 border-4 border-border border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}