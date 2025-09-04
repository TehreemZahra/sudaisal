/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
export const ContactPage = () => {
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
              Ready to streamline your supply chain? Get in touch with our team
              today
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
                      <div className="text-blue-100">+92 337-9807794</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-yellow-300" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-100">
                        sadiyasalitariq@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-yellow-300" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-blue-100">
                        Business Avenue
                        <br />
                        Suite 567, Business District
                        <br />
                        Rawalpindi, 44000
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
                  Need a custom quote for bulk orders? Our team will provide you
                  with competitive pricing within 24 hours.
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
