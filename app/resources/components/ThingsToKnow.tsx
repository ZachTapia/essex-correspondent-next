import Image from "next/image";
import image1 from "../../../public/resources/interest-rate.svg";

const ThingsToKnow = () => {
  return (
    <>
      <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Things To Know
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className=" grid h-full w-full grid-cols-1 bg-white text-black md:grid-cols-2 max-w-screen-lg mx-auto">
        <div>
          <Image
            src={image1}
            width={500}
            height={100}
            alt="mortgage interest rates"
            className="pl-6 pr-6 pt-6"
          />
        </div>
        <div className="pl-6 pr-6 pt-10">
          <h1 className="font-semibold text-lg text-gray-700">
            Affordable Lending Redefined
          </h1>
          <ul>
            <li className="font-extralight text-lg pt-2 flex items-center gap-2">
              - 100% Financing
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - FHA or Conventional Products to 100%
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Rebate Pricing to Help with Closing Costs
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - 600 Minimum FICO
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - First-Time Homebuyer Not Required
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Generous Income Limits
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Nationwide Footprint *
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ThingsToKnow;
