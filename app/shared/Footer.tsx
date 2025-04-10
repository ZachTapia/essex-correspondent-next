import Image from "next/image";
import image1 from "../../public/shared/whiteLogo.svg";
import image2 from "../../public/shared/equal-lender.svg";
import image3 from "../../public/shared/TWP-2012-2020-Text_Layer.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 p-6">
        <section className="grid h-full mx-auto max-w-screen-lg w-full grid-cols-1 bg-blue-950 p-2 text-black md:grid-cols-3">
          <div className="m-4 max-sm:m-2 bg-blue-950 p-6 justify-items-center">
            <Image
              src={image1}
              width={250}
              height={150}
              alt="Essex Correspondent Logo"
            ></Image>
            <p className="text-white pt-4 text-sm">1417 N. Magnolia Ave.</p>
            <p className="text-white pb-2 text-sm">Ocala, FL 34475</p>
          </div>

          <div className="m-4 max-sm:m-2 bg-blue-950 p-6 text-center justify-items-center">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Links
            </h2>
            <ul className="text-gray-300 dark:text-gray-300 font-medium">
              <li className="pb-2">
                <a href="/about" className="hover:underline" target="_blank">
                  About
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="/resources"
                  className="hover:underline"
                  target="_blank"
                >
                  Resources
                </a>
              </li>
              <li className="pb-2">
                <a href="/products" className="hover:underline" target="_blank">
                  Products
                </a>
              </li>
              <li className="pb-2">
                <a href="/contact" className="hover:underline" target="_blank">
                  Contact
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="https://essex.lauramac.io/#/"
                  className="hover:underline"
                  target="_blank"
                >
                  Client Login
                </a>
              </li>
            </ul>
          </div>

          <div className="m-4 max-sm:m-2 bg-blue-950 p-6 text-center">
          <div className="flex justify-center items-center gap-4">
          <Image
              src={image3}
              width={120}
              height={150}
              alt="Top workplace logo"
            ></Image>
            <Image
              src={image2}
              width={100}
              height={150}
              alt="equal housing lender logo"
            ></Image>
           
          </div>
          </div>
        </section>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm max-sm:text-center text-gray-300 sm:text-center dark:text-gray-300">
          Copyright © 2025 ESSEX MORTGAGE. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
