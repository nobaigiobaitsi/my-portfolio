import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 mx-auto bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] min-h-screen text-[#e0e6ed]">

      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Stavros Angelopoulos</h1>
        <p className="text-lg text-gray-400">Aspiring Software Developer</p>
        <Link href="/projects" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-[#e0e6ed] px-6 py-2 rounded-lg shadow-md transition">
          My Projects
        </Link>
        <Link href="/contact" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-[#e0e6ed] m-2 px-6 py-2 rounded-lg shadow-md transition">
          Contact
        </Link>
      </section>

      <hr className="border-gray-700 m-12" />
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-500">
          Although I studied Statistics, my true passion lies in software development. I am a passionate developer focused on building clean and efficient applications. Always following best practices and eager to learn new technologies and tools.
        </p>
        <p className="text-gray-500">
          I work with Java, JavaScript, Python, SQL, and C#, and I have built projects using frameworks like React, Next.js, Django, and WPF. I am equally comfortable on the frontend and backend, aiming to create seamless user experiences backed by solid logic and architecture.
        </p>
        <p className="text-gray-500">I love working with high-level languages and frameworks but also enjoy diving into lower-level programming when needed. </p>
      </section>

      <hr className="border-gray-700 m-12" />

      <section>
        <h2 className="text-2xl font-semibold mb-2">My links</h2>
        <ul className="mb-4 space-y-2">
          <li className="text-gray-500">GitHub - <a href="https://github.com/nobaigiobaitsi" className="text-sky-600 hover:underline">nobaigiobaitsi</a></li>
          <li className="text-gray-500">LinkedIn - <a href="https://www.linkedin.com/in/s-angelopoulos/" className="text-sky-600 hover:underline">Stavros Angelopoulos</a></li>
        </ul>
      </section>

      <hr className="border-gray-700 m-12" />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-400">
          <div>
            <h3 className="font-medium text-[#e0e6ed]">Frontend</h3>
            <ul className="space-y-1 ">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>WPF</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Backend</h3>
            <ul className="space-y-1">
              <li>Node.js</li>
              <li>Django</li>
              <li>SQL</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Languages</h3>
            <ul className="space-y-1">
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C#</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Tools</h3>
            <ul className="space-y-1">
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
