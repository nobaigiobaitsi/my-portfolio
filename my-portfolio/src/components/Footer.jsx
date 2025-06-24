export default function Footer() {
  return (
    <footer className="bg-gray-800 text-slate-100 py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Stavros Angelopoulos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
