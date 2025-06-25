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
          I studied Statistics but my true love is software development. I am a passionate developer focused on building clean and efficient applications. Always following best practices and eager to learn new technologies and tools.
        </p>
        <p className="text-gray-500">
          I love working with Java, JavaScript, Python, SQL and C#. I have experience with frameworks like React, Django, WPF, Next.js and many more. I focus on both the frontend and the backend, ensuring a seamless user experience and robust server-side logic.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">My links</h2>
        <ul className="mb-4 space-y-2">
          <li className="text-gray-500">GitHub - <a href="https://github.com/nobaigiobaitsi" className="text-sky-600 hover:underline">nobaigiobaitsi</a></li>
          <li className="text-gray-500">LinkedIn - <a href="https://www.linkedin.com/in/stavros-angelopoulos-8b0b1a1b2/" className="text-sky-600 hover:underline">Stavros Angelopoulos</a></li>
        </ul>
      </section>

      <hr className="border-gray-700" />
    </main>
  );
}
