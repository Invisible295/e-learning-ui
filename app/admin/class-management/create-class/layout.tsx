import type { ReactNode } from "react";

export default function CreateClassLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="px-6 pt-2 pb-12 max-w-5xl mx-auto w-full">{children}</div>
  );
}
