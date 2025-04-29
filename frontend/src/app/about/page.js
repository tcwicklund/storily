export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our application! We are dedicated to providing the best service possible.
        </p>
        <p className="text-gray-600 mb-4">
          Our team is committed to continuous improvement and innovation.
        </p>
        <p className="text-gray-600 mb-4">
          Thank you for choosing us!
        </p>
      </div>
    </div>
  );
}