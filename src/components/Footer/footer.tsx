import { FaCalendarPlus, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              NutriCare is committed to providing exceptional healthcare and
              nutrition services.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: +123 456 7890</li>
              <li>Email: support@nutricare.com</li>
              <li>Address: 123 Health Street, Wellness City</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button
                asChild
                variant="ghost"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>© 2025 NutriCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
