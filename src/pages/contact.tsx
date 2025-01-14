import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-[#EBF1FF] text-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-700 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We are here to assist you. Please reach out to us using the form below
            or through our contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-sky-700 mb-6">Get in Touch</h2>

            <div className="flex items-center gap-4 mb-6">
              <FaPhone className="text-sky-500 w-6 h-6" />
              <span className="text-gray-600">+123 456 7890</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-sky-500 w-6 h-6" />
              <span className="text-gray-600">support@nutricare.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-sky-500 w-6 h-6" />
              <span className="text-gray-600">123 Health Street, Wellness City</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-sky-700 mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <Input type="text" id="name" placeholder="Enter your name" className="mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Your Email
                </label>
                <Input type="email" id="email" placeholder="Enter your email" className="mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Your Message
                </label>
                <Textarea id="message" placeholder="Write your message here..." className="mt-1" />
              </div>

              <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
