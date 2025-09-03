import React, { useState } from "react";
import {
  Menu,
  X,
  Users,
  Package,
  Clock,
  Shield,
  ChevronRight,
  Star,
  Building2,
  Truck,
  CheckCircle,
} from "lucide-react";
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
              <button
                // onClick={() => setCurrentPage("contact")}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Get Quote <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button
                // onClick={() => setCurrentPage("clients")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                View Our Clients
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Package className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">500+ Products</h3>
                  <p className="text-sm text-blue-100">Wide range available</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">200+ Clients</h3>
                  <p className="text-sm text-blue-100">Trusted worldwide</p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-blue-100">Always available</p>
                </div>
                <div className="text-center">
                  <Truck className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-blue-100">On-time guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive supply chain solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Package,
              title: "Product Sourcing",
              description:
                "Access to global suppliers and manufacturers for all your product needs.",
              features: [
                "Quality Assurance",
                "Competitive Pricing",
                "Bulk Orders",
              ],
            },
            {
              icon: Truck,
              title: "Logistics & Delivery",
              description:
                "Efficient shipping and delivery solutions to get your orders on time.",
              features: [
                "Global Shipping",
                "Real-time Tracking",
                "Express Delivery",
              ],
            },
            {
              icon: Shield,
              title: "Quality Control",
              description:
                "Rigorous quality checks to ensure all products meet your standards.",
              features: [
                "Pre-shipment Inspection",
                "Quality Certificates",
                "Compliance Check",
              ],
            },
            {
              icon: Users,
              title: "Account Management",
              description:
                "Dedicated account managers to handle your orders and requirements.",
              features: [
                "Personal Support",
                "Order Management",
                "Custom Solutions",
              ],
            },
            {
              icon: Building2,
              title: "B2B Solutions",
              description:
                "Specialized services for businesses and institutional clients.",
              features: ["Bulk Pricing", "Credit Terms", "Long-term Contracts"],
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description:
                "Round-the-clock customer support for all your inquiries.",
              features: ["Live Chat", "Phone Support", "Email Assistance"],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Products Available" },
            { number: "200+", label: "Happy Clients" },
            { number: "50+", label: "Countries Served" },
            { number: "99.9%", label: "On-time Delivery" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-purple-100">
          Join hundreds of businesses that trust us with their supply chain
          needs
        </p>
        <button
          // onClick={() => setCurrentPage("contact")}
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105"
        >
          Contact Us Today
        </button>
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
            reliable supply chain solutions
          </p>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              company: "TechCorp Solutions",
              industry: "Technology",
              testimonial:
                "General Order Supplier has been instrumental in streamlining our procurement process. Their reliability and quality service have made them our go-to partner.",
              rating: 5,
              person: "Sarah Johnson, Procurement Manager",
            },
            {
              company: "Global Manufacturing Ltd",
              industry: "Manufacturing",
              testimonial:
                "The quality control and timely delivery have exceeded our expectations. We've been working with them for over 3 years now.",
              rating: 5,
              person: "Michael Chen, Operations Director",
            },
            {
              company: "Retail Plus Chain",
              industry: "Retail",
              testimonial:
                "Their wide product range and competitive pricing help us maintain our inventory efficiently. Excellent customer service!",
              rating: 5,
              person: "Amanda Rodriguez, Supply Chain Head",
            },
            {
              company: "MedEquip Healthcare",
              industry: "Healthcare",
              testimonial:
                "Compliance and quality are crucial in our industry. General Order Supplier consistently meets all our requirements.",
              rating: 5,
              person: "Dr. Robert Kim, Procurement Specialist",
            },
            {
              company: "EduSupplies Network",
              industry: "Education",
              testimonial:
                "From office supplies to specialized equipment, they handle all our educational institution needs with professionalism.",
              rating: 5,
              person: "Linda Thompson, Administrative Manager",
            },
            {
              company: "Construction Pro Ltd",
              industry: "Construction",
              testimonial:
                "Reliable delivery of construction materials and tools. Their logistics team ensures we never face project delays.",
              rating: 5,
              person: "David Martinez, Project Manager",
            },
          ].map((client, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(client.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{client.testimonial}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">
                  {client.company}
                </h4>
                <p className="text-sm text-blue-600 mb-1">{client.industry}</p>
                <p className="text-sm text-gray-500">{client.person}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Technology & IT",
              "Manufacturing",
              "Healthcare & Medical",
              "Education",
              "Retail & E-commerce",
              "Construction",
              "Hospitality",
              "Automotive",
              "Food & Beverage",
              "Government",
              "Non-Profit",
              "Financial Services",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stats */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Client Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Active Business Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
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
