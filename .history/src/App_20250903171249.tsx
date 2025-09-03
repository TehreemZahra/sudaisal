import React, { useState } from "react";
import { Menu, X, Package, ChevronRight } from "lucide-react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Footer from "./components/footer";
import { PrivacyPage } from "./components/privacy";
import { ContactPage } from "./components/contact";

const HomePage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted{" "}
              <span className="text-yellow-300">General Order</span> Supplier
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Streamlining procurement and supply chain solutions for businesses
              of all sizes. From raw materials to finished goods, we deliver
              excellence every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Get Quote <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/clients"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                View Our Clients
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ClientsPage = () => (
  <div className="pt-20">
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Valued Clients
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve businesses across various industries with our
            reliable supply chain solutions.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <header className="bg-white shadow-xl fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Package className="h-10 w-10 text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-gray-900">
              General Order Supplier
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="ml-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-4 bg-yellow-400 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
