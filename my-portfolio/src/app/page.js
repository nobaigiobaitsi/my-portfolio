import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 mx-auto bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] min-h-screen text-[#e0e6ed]">

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Stavros Angelopoulos</h1>
        <p className="text-lg text-gray-400">Aspiring Software Developer</p>
        <Link href="/projects" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-[#e0e6ed] px-6 py-2 rounded-lg shadow-md transition">
          My Projects
        </Link>
        <Link href="/contact" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-[#e0e6ed] m-2 px-6 py-2 rounded-lg shadow-md transition">
          Contact
        </Link>
      </section>

      <hr className="border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-500">
          I am a passionate developer focused on building clean, efficient, and user-friendly applications. Currently working with React, Node.js, and Python.
        </p>
        <Link href="/about" className="inline-block text-sky-400 hover:underline mt-2">Read more</Link>
      </section>

      <hr className="border-gray-700" />
    </main>
  );
}
