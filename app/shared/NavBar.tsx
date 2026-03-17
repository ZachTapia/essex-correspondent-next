"use client";
import Link from "next/link";
import Image from "next/image";
import image1 from "../../public/shared/CorrLogo.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 top-3 shadow lg:px-8">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <Link href="/">
            <Image
              src={image1}
              width={250}
              height={100}
              alt="Essex Correspondent Logo"
              className="mr-4 block cursor-pointer"
            />
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-10 w-6 max-w-10 select-none rounded-lg text-center align-middle text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-80 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="gray"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link href="/">
                <Image
                  src={image1}
                  width={200}
                  height={100}
                  alt="Couple moving into a home"
                  className="mr-4 block cursor-pointer"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-black hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                    pathname === item.href
                      ? "text-gray-300 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}

<li
                className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                  pathname === "/contact"
                    ? "text-gray-300 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/dpa" className="flex items-center">
                  DPA
                </Link>
              </li>

              <li
                className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                  pathname === "/contact"
                    ? "text-gray-300 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/resources" className="flex items-center">
                  RESOURCES
                </Link>
              </li>

              <li
                className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                  pathname === "/contact"
                    ? "text-gray-300 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/contact" className="flex items-center">
                  CONTACT
                </Link>
              </li>

              <li className="mt-4">
                <Link href="https://essex.lauramac.io/#/" target="_blank">
                  <button className="bg-blue-950 text-white px-8 py-2 font-medium rounded-md hover:bg-gray-600">
                    CLIENT LOGIN
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                    pathname === item.href
                      ? "text-gray-300 font-bold"
                      : "text-black"
                  }`}
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}

              <li
                className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                  pathname === "/contact"
                    ? "text-gray-300 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/dpa" className="flex items-center">
                  DPA
                </Link>
              </li>


              <li
                className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                  pathname === "/contact"
                    ? "text-gray-300 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/resources" className="flex items-center">
                  RESOURCES
                </Link>
              </li>

              <li
                className={`flex items-center p-1 text-lg font-medium gap-x-2 hover:text-gray-300 ${
                  pathname === "/contact"
                    ? "text-gray-300 font-bold"
                    : "text-black"
                }`}
              >
                <Link href="/contact" className="flex items-center">
                  CONTACT
                </Link>
              </li>

              <li>
                <Link href="https://essex.lauramac.io/#/" target="_blank">
                  <button className="bg-blue-950 hover:bg-gray-600 font-medium text-white px-8 py-2 cursor-pointer">
                    CLIENT LOGIN
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
