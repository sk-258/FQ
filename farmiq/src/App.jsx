import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">🌾 FarmIQ</div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/detect" className="hover:text-yellow-300 transition">Detect Disease</Link>
        <Link to="/marketplace" className="hover:text-yellow-300 transition">Marketplace</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-8 text-center flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-5xl font-bold mb-6 text-green-700">Welcome to FarmIQ</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Detect crop diseases and find solutions instantly using AI. Save your crops, save your money.
      </p>
    </div>
  );
}

function Detect() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    // Dummy result for now
    setTimeout(() => {
      setResult({ disease: "Leaf Blight", solution: "Use copper-based fungicide." });
    }, 1000);
  };

  return (
    <div className="p-8 text-center min-h-[70vh]">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Upload a Leaf Image</h2>
      <input
        type="file"
        onChange={handleImageUpload}
        className="mb-4 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700"
      />
      {image && (
        <img src={image} alt="leaf" className="mx-auto my-4 h-48 rounded shadow" />
      )}
      {result && (
        <div className="mt-6 bg-green-100 p-6 rounded-lg shadow-md text-left max-w-md mx-auto">
          <p className="text-lg"><strong>Disease:</strong> {result.disease}</p>
          <p className="text-lg"><strong>Solution:</strong> {result.solution}</p>
        </div>
      )}
    </div>
  );
}

function Marketplace() {
  const crops = [
    { crop: "Tomato", qty: "50kg", price: "₹20/kg", location: "Warangal" },
    { crop: "Wheat", qty: "100kg", price: "₹25/kg", location: "Nizamabad" },
  ];

  return (
    <div className="p-8 min-h-[70vh]">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Crop Marketplace</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {crops.map((item, idx) => (
          <li key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-xl font-semibold text-green-700">{item.crop}</p>
            <p><strong>Quantity:</strong> {item.qty}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <p><strong>Location:</strong> {item.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
