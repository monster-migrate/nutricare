import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const BookAppointment = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold text-sky-600">
              Book Your Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="mt-1 w-full"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="mt-1 w-full"
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="mt-1 w-full"
                />
              </div>
              {/* Appointment Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Appointment Date
                </label>
                <Input type="date" id="date" className="mt-1 w-full" />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes
                </label>
                <Textarea
                  id="message"
                  placeholder="Provide any additional information..."
                  className="mt-1 w-full"
                  rows={4}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-sky-500 w-full md:w-auto">
              Submit Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BookAppointment;
