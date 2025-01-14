import Logo from "@/components/Logo/Logo";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCalendarPlus } from "react-icons/fa";
import { GiHotMeal, GiHealthPotion } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { Geist, Geist_Mono } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logos = [
  { src: "/1x/banner1.png" },
  { src: "/1x/banner2.png" },
  { src: "/1x/banner3.png" },
];

const logoClass =
  "w-full h-[256px] object-cover transition-transform transform md:scale-100 md:object-fill md:w-auto md:h-auto md:translate-x-0 md:translate-y-0 scale-x-150 scale-y-100 object-center translate-x-[25%] translate-y-0";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-indigo-500 gap-12">
      <Carousel className="w-full">
        <CarouselContent>
          {logos.map((logo, index) => (
            <CarouselItem key={index}>
              <Logo
                src={logo.src}
                width="w-full"
                height="h-full"
                text=""
                link_to="#"
                className={logoClass}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute bg-sky-500 w-11 h-11 left-4" />
        <CarouselNext className="absolute bg-sky-500 w-11 h-11 right-4" />
      </Carousel>
      <div className="grid gap-6 p-2 md:grid-cols-2 lg:grid-cols-4 md:p-24">
        <Card className="w-full h-full bg-[#EBF1FF] rounded-xl shadow-md hover:shadow-2xl transform transition-transform duration-200 hover:scale-105 overflow-hidden flex flex-col justify-between">
          <CardHeader className="flex flex-col justify-end items-center py-4 px-0">
            <FaCalendarPlus className="w-12 h-12 text-rose-500 mb-2" />
            <Separator className="w-full border-b-2 border-gray-200" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              Book Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 text-center flex-grow">
            <p className="text-gray-600 mb-1">
              Our hospital offers top-notch dietary services to provide you with
              the healthiest eating plans. 🌿 We specialize in personalized food
              diets tailored to your specific needs.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center items-center p-4 md:p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-500">
              Empower yourself with a healthier diet today!
            </p>
          </CardFooter>
        </Card>

        <Card className="w-full h-full bg-[#EBF1FF] rounded-xl shadow-md hover:shadow-2xl transform transition-transform duration-200 hover:scale-105 overflow-hidden flex flex-col justify-between">
          <CardHeader className="flex flex-col justify-end items-center py-4 px-0">
            <GiHotMeal className="w-12 h-12 text-rose-500 mb-2" />
            <Separator className="w-full border-b-2 border-gray-200" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              Eat Smart
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 text-center flex-grow">
            <p className="text-gray-600 mb-1">
              Take control of your health with our bespoke meal plans from Eat
              Smart! 🍏 Our team of experts tailors dietary plans to fit your
              lifestyle and preferences, ensuring you enjoy every bite while
              achieving your nutritional goals.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center items-center p-4 md:p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-500">
              Join us and start your journey towards smarter, healthier eating
              today!
            </p>
          </CardFooter>
        </Card>

        <Card className="w-full h-full bg-[#EBF1FF] rounded-xl shadow-md hover:shadow-2xl transform transition-transform duration-200 hover:scale-105 overflow-hidden flex flex-col justify-between">
          <CardHeader className="flex flex-col justify-end items-center py-4 px-0">
            <GiHealthPotion className="w-12 h-12 text-rose-500 mb-2" />
            <Separator className="w-full border-b-2 border-gray-200" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              Health Check-Up
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 text-center flex-grow">
            <p className="text-gray-600 mb-1">
              Stay on top of your health with our comprehensive check-up
              services. Our team of dedicated professionals ensures you receive
              the best care tailored to your needs. Book your appointment today
              and take the proactive step towards a healthier, happier you!
            </p>
          </CardContent>
          <CardFooter className="flex justify-center items-center p-4 md:p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-500">
              Dedicated to your well-being, one check-up at a time.
            </p>
          </CardFooter>
        </Card>

        <Card className="w-full h-full bg-[#EBF1FF] rounded-xl shadow-md hover:shadow-2xl transform transition-transform duration-200 hover:scale-105 overflow-hidden flex flex-col justify-between">
          <CardHeader className="flex flex-col justify-end items-center py-4 px-0">
            <TbTruckDelivery className="w-12 h-12 text-rose-500 mb-2" />
            <Separator className="w-full border-b-2 border-gray-200" />
            <CardTitle className="text-2xl font-bold text-gray-800">
              Request Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 text-center flex-grow">
            <p className="text-gray-600 mb-1">
              Discover the full potential of our services with a personalized
              demo. Our experts will guide you through all the features and
              benefits tailored to your needs. Request your demo today and see
              the difference firsthand!
            </p>
          </CardContent>
          <CardFooter className="flex justify-center items-center p-4 md:p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-500">
              Unlock unparalleled solutions with just one demo.
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg m-4">
        <h1 className="font-semibold p-4 justify-center items-center text-4xl">
          Explore Our Nutritional Excellence Centers
        </h1>
        <p className="text-gray-700 p-4">
          Our hospital takes pride in its state-of-the-art Nutritional
          Excellence Centers, dedicated to providing exceptional dietary and
          nutritional services. Each center is equipped with cutting-edge
          technology to meticulously measure and analyze food data, ensuring you
          receive the most accurate and advanced meal plans. Our dedicated team
          of nutritionists and dietitians work tirelessly to tailor personalized
          meal plans that not only meet but exceed your nutritional needs. With
          our commitment to quality and precision, we guarantee world-class
          outcomes that empower you to lead a healthier, happier life.
        </p>
      </div>
    </div>
  );
}
