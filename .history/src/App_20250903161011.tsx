/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
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

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Clients", id: "clients" },
    { name: "Contact Us", id: "contact" },
    { name: "Privacy Policy", id: "privacy" },
  ];

  const Header = () => (
    <header className="bg-white shadow-xl fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <Package className="h-10 w-10 text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-gray-900">
              General Order Supplier
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? "text-white bg-blue-600 shadow-lg"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage("contact")}
              className="ml-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Get Quote
            </button>
          </nav>

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

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    currentPage === item.id
                      ? "text-white bg-blue-600"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-yellow-400 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );

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
                Streamlining procurement and supply chain solutions for
                businesses of all sizes. From raw materials to finished goods,
                we deliver excellence every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Get Quote <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentPage("clients")}
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
                    <p className="text-sm text-blue-100">
                      Wide range available
                    </p>
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
              Comprehensive supply chain solutions tailored to your business
              needs
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
                features: [
                  "Bulk Pricing",
                  "Credit Terms",
                  "Long-term Contracts",
                ],
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
            onClick={() => setCurrentPage("contact")}
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
                  <p className="text-sm text-blue-600 mb-1">
                    {client.industry}
                  </p>
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

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    const handleSubmit = (e: any) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    };

    return (
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to streamline your supply chain? Get in touch with our
                team today
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-4 text-yellow-300" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-blue-100">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 mr-4 text-yellow-300" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-blue-100">
                          info@generalordersupplier.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 mr-4 text-yellow-300" />
                      <div>
                        <div className="font-semibold">Address</div>
                        <div className="text-blue-100">
                          1234 Business Avenue
                          <br />
                          Suite 567, Business District
                          <br />
                          New York, NY 10001
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center text-blue-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-semibold">
                        24/7 Emergency Support Available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Request a Quote
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Need a custom quote for bulk orders? Our team will provide
                    you with competitive pricing within 24 hours.
                  </p>
                  <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    Get Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const PrivacyPage = () => (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At General Order Supplier, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our services or visit
                our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Personal Information
                  </h3>
                  <p className="text-gray-700">
                    We may collect personal information that you voluntarily
                    provide, including:
                  </p>
                  <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                    <li>
                      • Name and contact information (email, phone, address)
                    </li>
                    <li>• Company name and business details</li>
                    <li>• Payment and billing information</li>
                    <li>• Order history and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Usage Information
                  </h3>
                  <p className="text-gray-700">
                    We automatically collect certain information about your
                    interactions with our services:
                  </p>
                  <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Referral sources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Processing and fulfilling your orders</li>
                <li>• Providing customer support and communication</li>
                <li>• Improving our services and website functionality</li>
                <li>
                  • Sending relevant updates and promotional materials (with
                  your consent)
                </li>
                <li>• Complying with legal obligations</li>
                <li>• Preventing fraud and ensuring security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information. We may
                share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• With service providers who assist in our operations</li>
                <li>• When required by law or to protect our rights</li>
                <li>
                  • In connection with a business transaction (merger,
                  acquisition)
                </li>
                <li>• With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include encryption, secure servers, and regular security
                assessments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Access: Request copies of your personal information</li>
                <li>
                  • Correction: Request correction of inaccurate information
                </li>
                <li>
                  • Deletion: Request deletion of your personal information
                </li>
                <li>• Portability: Request transfer of your information</li>
                <li>• Opt-out: Unsubscribe from marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences. Some features may not function
                properly if cookies are disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-700">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy,
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                International Transfers
              </h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information during such transfers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date. We encourage you to review
                this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2 text-gray-700">
                  <div>
                    <strong>Email:</strong> privacy@generalordersupplier.com
                  </div>
                  <div>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </div>
                  <div>
                    <strong>Address:</strong> 1234 Business Avenue, Suite 567,
                    Business District, New York, NY 10001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Package className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">General Order Supplier</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for all procurement and supply chain needs.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@generalordersupplier.com
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Product Sourcing</li>
              <li>Logistics & Delivery</li>
              <li>Quality Control</li>
              <li>Account Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("clients")}
                  className="hover:text-white"
                >
                  Our Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="hover:text-white"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("privacy")}
                  className="hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Technology</li>
              <li>Manufacturing</li>
              <li>Healthcare</li>
              <li>Education</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 General Order Supplier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "clients":
        return <ClientsPage />;
      case "contact":
        return <ContactPage />;
      case "privacy":
        return <PrivacyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
