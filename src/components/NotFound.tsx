import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="border-2 border-white text-white rounded-2xl shadow-2xl py-16 xl:px-20 max-w-md w-full text-center">
        
        {/* 404 */}
        <h1 className="text-7xl max-md:text-5xl font-extrabold tracking-tight animate-bounce text-p3">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl max-md:text-xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2 mb-6 max-md:text-sm">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block py-4 bg-p3 text-black font-semibold px-6 rounded-lg hover:scale-105 transition-transform duration-200 max-md:text-sm"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}