import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to Storily!
      </h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}