export default function AboutLayout({ children }) {
  return (

    <div>
        <div className="justify-between p-3 bg-gray-800 text-white">
            <p className="text-center text-2xl mt-10">This is the About page.</p>
        {children}
        </div>
    </div>

  );
}
