import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between px-4 items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Learning Platform</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="text-lg hover:text-yellow-300 transition flex items-center justify-center"
          >
            Home
          </Link>
          <Link
            href="/login"
            className="bg-yellow-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
