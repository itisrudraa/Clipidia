import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-5">
        <Link to="/" className="text-2xl font-bold text-white">
          Clip<span className="text-indigo-500">idia</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;