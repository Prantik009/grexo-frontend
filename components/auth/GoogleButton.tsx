"use client";

export default function GoogleButton() {
  return (
    <button
      className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border bg-background hover:bg-surface transition"
    >
      <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
      <span className="text-sm font-medium">
        Continue with Google
      </span>
    </button>
  );
}
