import Image from "next/image";
import image1 from "../../../public/dpa/feature.svg";

const Features = () => {
  return (
    <>
    <section className="bg-gray-200 pt-4">
      <section className=" grid h-full w-full grid-cols-1 bg-gray-200 text-black md:grid-cols-2 max-w-screen-lg mx-auto">
        <div>
          <Image
            src={image1}
            width={500}
            height={100}
            alt="Couple moving into a home"
            className="pl-6 pr-6 pt-6"
          />
        </div>
        <div className="pl-6 pr-6 pt-6 max-sm:pt-4">
          <h1 className="font-semibold text-lg text-blue-950">
            Some Features Are:
          </h1>
          <ul>
            <li className="font-extralight text-lg pt-2 flex items-center gap-2">
              - Up to 101.5% Financing - 1st FHA 96.5% loan plus DPA 2nd loan for 3.5% or 5%
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Two options for the 2nd - 0% forgivable or amortized for 10 years
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - No first time homebuyer requirements
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Expanded Qualifying Criteria
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - No DTI limitations with a DU or LP approval
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - We have full delegated authority to fund your loan - no third party delays
            </li>
          </ul>
        </div>
      </section>
      </section>
      <section className="w-full bg-gray-200 h-[60px] sm:h-[70px] md:h-[90px] [clip-path:polygon(0_0,100%_0,50%_100%)] "></section>
    </>
  );
};

export default Features;