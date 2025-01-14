import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { Separator } from "../ui/separator";
import { IoIosArrowDropdownCircle, IoIosMenu } from "react-icons/io";
import { Button } from "../ui/button";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="block p-0">
      <nav className="bg-sky-500 h-24 p-6">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <Logo
            src="/1x/logo.png"
            width="w-12"
            height="h-12"
            text="Nutricare"
            className=""
            link_to="/"
          />
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-sky-950">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-sky-950">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-sky-950">
              Contact
            </Link>
          </div>
          <div className="absolute top-8 right-2 rounded-lg shadow-lg">
            <DropdownMenu>
              <DropdownMenuTrigger className="md:hidden text-white p-2 border rounded-lg border-white">
                Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mx-2">
                <DropdownMenuItem>
                  <Link href="/" className="block text-gray-500 p-1">
                    Home
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                  <Link href="/about" className="block text-gray-500 p-1">
                    About
                  </Link>
                </DropdownMenuItem>
                <Separator className="h-[0.4px]" />
                <DropdownMenuItem>
                  <Link href="/contact" className="block text-gray-500 p-1">
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <div className="bg-[#EBF1FF] text-gray-700 p-4 flex flex-row justify-between items-center md:flex-row md:justify-start md:items-center">
        <Logo
          src="1x/vitamins.png"
          width="w-[125px]"
          height="h-[40px]"
          text=""
          className=""
          link_to="#"
        />
        <div className="hidden md:flex flex-row justify-start items-start ml-4 gap-12">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[250px] flex align-bottom items-center gap-1 justify-end md:justify-center text-gray-700 px-6 py-1 border rounded-sm border-white">
              Patient Care
              <IoIosArrowDropdownCircle />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="/bookappointment"
                  className="block text-gray-500 p-1"
                >
                  Book Appointment
                </Link>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Find Your Plan
                </Link>
              </DropdownMenuItem>
              <Separator className="h-[0.4px]" />
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Book health Checkup
                </Link>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Order Demo
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[250px] flex align-bottom items-center gap-1 justify-end md:justify-center text-gray-700 px-6 py-1 border rounded-sm border-white">
              Health Information
              <IoIosArrowDropdownCircle />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Diseases and Allergies
                </Link>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Tests and Procedures
                </Link>
              </DropdownMenuItem>
              <Separator className="h-[0.4px]" />
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Medicine and Diagonostics
                </Link>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <Link href="#" className="block text-gray-500 p-1">
                  Glossary
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-[250px] flex align-bottom items-center gap-1 justify-end md:justify-center text-gray-700 px-6 py-1 border rounded-sm border-white">
              Careers
              <IoIosArrowDropdownCircle />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/careers" className="block text-gray-500 p-1">
                  Job openings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="flex flex-row justify-center gap-4 items-center">
            <Button className="bg-sky-500 w-[96px]">Login</Button>
            <Button className="bg-sky-500 w-[96px]">Join Us</Button>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <IoIosMenu className="text-sky-500 w-10 h-10" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[250px] flex align-bottom items-center gap-1 justify-end md:justify-center text-gray-700 px-6 py-1 border rounded-sm border-white">
                Patient Care
                <IoIosArrowDropdownCircle />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    href="/bookappointment"
                    className="block text-gray-500 p-1"
                  >
                    Book Appointment
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Find Your Plan
                  </Link>
                </DropdownMenuItem>
                <Separator className="h-[0.4px]" />
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Book health Checkup
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Order Demo
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[250px] flex align-bottom items-center gap-1 justify-end md:justify-center text-gray-700 px-6 py-1 border rounded-sm border-white">
                Health Information
                <IoIosArrowDropdownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Diseases and Allergies
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Tests and Procedures
                  </Link>
                </DropdownMenuItem>
                <Separator className="h-[0.4px]" />
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Medicine and Diagonostics
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                  <Link href="#" className="block text-gray-500 p-1">
                    Glossary
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-[250px] flex align-bottom items-center gap-1 justify-end md:justify-center text-gray-700 px-6 py-1 border rounded-sm border-white">
                Careers
                <IoIosArrowDropdownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/careers" className="block text-gray-500 p-1">
                    Job openings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator />
            <br />
            <div className="flex flex-row justify-center gap-4 items-center">
              <Button className="bg-sky-500 w-[96px]">Login</Button>
              <Button className="bg-sky-500 w-[96px]">Join Us</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
