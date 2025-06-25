import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProjectsPage() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 mx-auto bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] min-h-screen text-[#e0e6ed]">
      <AnimatedSection>
        <section className="text-center py-12 border-t border-gray-700">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            My Projects
          </h1>
          <p className="mt-2 text-gray-400 text-lg">
            A collection of personal and professional work showcasing my skills and growth.
          </p>
        </section>
      </AnimatedSection>

     {/* <AnimatedSection>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 border-t border-gray-700">
          {/* Project Card Example
          <div className="bg-[#1e1e30] rounded-lg border border-[#2c2c3d] p-6 hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
            <h3 className="text-xl font-semibold text-[#e0e6ed] mb-2">
              Inventory Management System
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              A full-featured inventory system built with Python and MySQL, featuring clean separation of logic and CLI interface.
            </p>
            <p className="text-sm text-sky-400 mb-2">Python · MySQL · CLI</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/your-username/inventory-system"
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href="/projects/inventory"
                className="text-blue-500 hover:underline text-sm"
              >
                Details
              </a>
            </div>
          </div>

          {/* Duplicate and customize the card for other projects
        </section>
      </AnimatedSection> */}
    </main>
  );
}
