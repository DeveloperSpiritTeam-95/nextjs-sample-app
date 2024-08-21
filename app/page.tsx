import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-green-600">
        Hello This application running through Docker
      </h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
