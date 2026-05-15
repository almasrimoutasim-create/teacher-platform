"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}