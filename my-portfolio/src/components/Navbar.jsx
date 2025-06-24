export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold"><a href="/">My Portfolio</a></div>
      <div className="space-x-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/projects" className="hover:underline">Projects</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
