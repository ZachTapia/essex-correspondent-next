import Image from "next/image";
import image1 from "../../../public/home-page/lending-should-be.svg";

const WhyEssex = () => {
  return (
    <>
      <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Why Choose Essex
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className=" grid h-full w-full grid-cols-1 bg-white text-black md:grid-cols-2 max-w-screen-lg mx-auto">
        <div>
          <Image
            src={image1}
            width={600}
            height={100}
            alt="looking through documents to sign"
            className="pt-4 pl-6 pr-6"
          />
        </div>
        <div className="pl-6 pr-6 max-sm:pt-8">
          <p className="font-extralight pb-10 flex items-center gap-2">
            <svg
              className="w-30 h-30 text-gray-800 dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
            At Essex Correspondent, we empower our clients to control their
            destinies so they can serve their employees and customers 100% of
            the time regardless of what is going on in the marketplace, not just
            when times are good.
          </p>
          <p className="font-extralight flex items-center gap-2">
          <svg
              className="w-30 h-30 text-gray-800 dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
            You are given a Transparent Pricing Model. You can Dictate your
            Credit Policy. You can Participate in a Long - Term Servicing
            Revenue. You can offer Nationwide Down Payment Options.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyEssex;
