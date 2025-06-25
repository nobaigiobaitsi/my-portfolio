// src/app/contact/page.jsx
'use client';

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a23] text-[#e0e6ed] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>

        <p className="text-gray-400 mb-6 text-center">
          Get in touch with me.
        </p>

        <div className="space-y-4 text-center">
          <p className="bg-[#35364F] p-4 rounded-lg">
            Email:{" "}
            <a href="mailto:stavros@example.com" className="text-sky-400 hover:underline">
              stavros@example.com
            </a>
          </p>

          <p className="bg-[#35364F] p-4 rounded-lg">
            Location: Athens, Greece
          </p>

          <p className="bg-[#35364F] p-4 rounded-lg">
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/yourprofile" className="text-sky-400 hover:underline">
              linkedin.com/in/yourprofile
            </a>
          </p>

          <p className="bg-[#35364F] p-4 rounded-lg">
            GitHub:{" "}
            <a href="https://github.com/yourusername" className="text-sky-400 hover:underline">
              github.com/yourusername
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
        </div>
      </div>
    </main>
  );
}
