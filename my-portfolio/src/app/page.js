import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 mx-auto bg-black text-slate-100">

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Stavros Angelopoulos</h1>
        <p className="text-lg text-gray-600">Aspiring Software Developer</p>
        <Link href="/projects" className="inline-block mt-4 px-6 py-2 bg-slate-100 text-black rounded-lg hover:bg-slate-700">
          View Projects
        </Link>
      </section>

      <hr className="border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">
          I am a passionate developer focused on building clean, efficient, and user-friendly applications. Currently working with React, Node.js, and Python.
        </p>
        <Link href="/about" className="inline-block text-blue-600 hover:underline mt-2">Read more</Link>
      </section>

      <hr className="border-gray-700" />
    </main>
  );
}
