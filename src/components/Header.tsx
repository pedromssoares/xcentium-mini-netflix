import { useRouter } from "next/router";
import Image from "next/image";

export default function Header({
  title,
}: {
  title: string;
  onSearch?: (query: string) => void;
}) {
  const router = useRouter();

  return (
    <header className="bg-zinc-100 p-4 text-white flex items-center shadow-lg">
      <Image
        src="/XC-logo.svg"
        alt="Xcentium Logox"
        width={0}
        height={0}
        className="w-[163px] md:w-[140px] sm:w-[120px] max-w-[100px]"
        priority
      />
      <h1 className="text-2xl text-black font-bold">{title}</h1>

      {/* Back to home button */}
      {router.pathname !== "/" && (
        <button
          onClick={() => router.push("/")}
          className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-500 transition-all"
        >
          ← Back
        </button>
      )}
    </header>
  );
}
