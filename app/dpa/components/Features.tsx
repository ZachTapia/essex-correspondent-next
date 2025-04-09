import Image from "next/image";
import image1 from "../../../public/dpa/feature.svg";

const Features = () => {
  return (
    <>
    <section className="bg-gray-200 pt-8">
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
        <div className="pl-6 pr-6 pt-10 max-sm:pt-4">
          <h1 className="font-semibold text-lg text-blue-950">
            Some Features Are:
          </h1>
          <ul>
            <li className="font-extralight text-lg pt-2 flex items-center gap-2">
              - 100% or 101.5% CLTV options
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Amortizing and Forgivable DPAs
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - No Income Limits
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - No Fee restrictions 
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Full Delegation
            </li>
            <li className="font-extralight text-lg flex items-center gap-2">
              - Expanded Qualifying Criteria
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