export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#0a0a23] text-[#e0e6ed]">
      <div className="text-lg font-bold"><a href="/">My Portfolio</a></div>
      <div className="space-x-4">
        <a href="/projects" className="hover:underline">Projects</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
