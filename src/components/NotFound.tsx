import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F509] flex items-center justify-center px-4">
      <div className="bg-black text-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        
        {/* 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-[#F9F509] text-black font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}