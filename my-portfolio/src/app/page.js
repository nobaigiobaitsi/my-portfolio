import Link from "next/link";
import { SiReact, SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";
import { FaJava, FaPython, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { VscVscode, VscGithubInverted } from "react-icons/vsc";
import { DiVisualstudio, DiJavascript1 } from "react-icons/di";
import { TbSql, TbBrandCSharp } from "react-icons/tb";

export default function HomePage() {
  return (
    <main className="p-8 mx-auto bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] min-h-screen text-[#e0e6ed]">

      <section className="text-center py-12 border-t border-gray-700">
        <h1 className="text-4xl font-bold mb-2">Stavros Angelopoulos</h1>
        <p className="text-lg text-gray-400">Aspiring Software Developer</p>
        <Link href="/projects" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-[#e0e6ed] px-6 py-2 rounded-lg shadow-md transition">
          My Projects
        </Link>
        <Link href="/contact" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-[#e0e6ed] m-2 px-6 py-2 rounded-lg shadow-md transition">
          Contact
        </Link>
      </section>


      <section className="mb-12 py-12 border-t border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-500">
          Although I studied Statistics, my true passion lies in software development. I am a passionate developer focused on building clean and efficient applications. Always following best practices and eager to learn new technologies and tools.
        </p>
        <p className="text-gray-500">
          I work with Java, JavaScript, Python, SQL, and C#, and I have built projects using frameworks like React, Next.js, Django, and WPF. I am equally comfortable on the frontend and backend, aiming to create seamless user experiences backed by solid logic and architecture.
        </p>
        <p className="text-gray-500">I love working with high-level languages and frameworks but also enjoy diving into lower-level programming when needed. </p>
      </section>

      <section className="mb-12 py-12 border-t border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">My links</h2>
        <ul className="mb-4 space-y-2">
          <li className="text-[#e0e6ed]">GitHub - <a href="https://github.com/nobaigiobaitsi" className="text-sky-600 hover:underline">nobaigiobaitsi</a></li>
          <li className="text-[#e0e6ed]">LinkedIn - <a href="https://www.linkedin.com/in/s-angelopoulos/" className="text-sky-600 hover:underline">Stavros Angelopoulos</a></li>
        </ul>
      </section>

      <section className="mt-12 py-12 border-t border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-400">
          <div>
            <h3 className="font-medium text-[#e0e6ed]">Frontend</h3>
            <ul className="space-y-1 ">
              <li><SiReact className="inline mr-1" /> React</li>
              <li><SiNextdotjs className="inline mr-1" /> Next.js</li>
              <li><SiTailwindcss className="inline mr-1" /> Tailwind CSS</li>
              <li><FaHtml5 className="inline mr-1" /> HTML & CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Backend</h3>
            <ul className="space-y-1">
              <li><FaNodeJs className="inline mr-1" /> Node.js</li>
              <li><SiDjango className="inline mr-1" /> Django</li>
              <li><TbSql className="inline mr-1" /> SQL</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Languages</h3>
            <ul className="space-y-1">
              <li><FaJava className="inline mr-1" /> Java</li>
              <li><DiJavascript1 className="inline mr-1" /> JavaScript</li>
              <li><FaPython className="inline mr-1" /> Python</li>
              <li><TbBrandCSharp className="inline mr-1" /> C#</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Tools</h3>
            <ul className="space-y-1">
              <li><FaGitAlt className="inline mr-1" /> Git</li>
              <li><VscGithubInverted className="inline mr-1" /> GitHub</li>
              <li><VscVscode className="inline mr-1" /> Visual Studio Code</li>
              <li><DiVisualstudio className="inline mr-1" /> Visual Studio</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 py-12 border-t border-gray-700 text-center">
        <h2 className="text-2xl font-bold text-[#e0e6ed] mb-4">Want to work together?</h2>
        <p className="text-gray-400 mb-6">I am open to freelance work, collaboration, or full-time opportunities.</p>
        <Link href="/contact" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition">
          Contact Me
        </Link>
      </section>

    </main>
  );
}
