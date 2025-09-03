import { Phone, Mail, Package } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <Package className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">AL SUDAIS ENTERPRISES</span>
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
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AL SUDAIS ENTERPRISES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
