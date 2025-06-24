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
          I'm a passionate developer focused on building clean, efficient, and user-friendly applications. Currently working with React, Node.js, and Python.
        </p>
        <Link href="/about" className="inline-block text-blue-600 hover:underline mt-2">Read more</Link>
      </section>

      <hr className="border-gray-700" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Inventory Management System</h3>
            <p className="text-gray-700">A full-stack inventory app using Django and MySQL.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Crypto Exchanger Bot</h3>
            <p className="text-gray-700">Automated trading bot for Binance using Python APIs and React dashboard.</p>
          </li>
        </ul>
        <Link href="/projects" className="text-blue-600 hover:underline mt-2 block">See all projects →</Link>
      </section>

      {/* Contact CTA */}
      <section className="text-center mt-12">
        <p className="text-xl">Want to work together?</p>
        <Link href="/contact" className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Contact Me
        </Link>
      </section>
    </main>
  );
}
