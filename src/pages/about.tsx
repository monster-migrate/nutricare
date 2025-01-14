import { Separator } from "@/components/ui/separator";
import { FaHeartbeat, FaLeaf, FaUsers } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-sky-500 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About NutriCare</h1>
          <p className="text-lg">
            Dedicated to delivering excellence in healthcare and nutrition services.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <Separator className="mb-6" />
          <p className="text-gray-600 leading-relaxed">
            At NutriCare, our mission is to empower individuals to lead healthier lives
            through personalized healthcare and expert nutritional guidance. We
            strive to combine innovative practices with compassionate care to
            achieve outstanding results.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <Separator className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <FaHeartbeat className="text-sky-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We provide care with empathy, ensuring every individual feels valued and respected.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <FaLeaf className="text-sky-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Promoting sustainable health solutions for a better future.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md text-center">
              <FaUsers className="text-sky-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">
                Building a strong community of health-conscious individuals.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose NutriCare?</h2>
          <Separator className="mb-6" />
          <p className="text-gray-600 leading-relaxed mb-6">
            NutriCare stands out for its unwavering commitment to excellence,
            offering a comprehensive range of healthcare and nutrition services
            tailored to your unique needs. Here’s why people trust us:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Highly qualified professionals with years of expertise.</li>
            <li>State-of-the-art facilities and cutting-edge technology.</li>
            <li>Personalized and holistic approach to wellness.</li>
            <li>Comprehensive support and guidance at every step.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
