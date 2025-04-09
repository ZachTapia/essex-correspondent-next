import Image from "next/image";
import image1 from "../../../public/home-page/Transparency.svg"
import image2 from "../../../public/home-page/Consistency.svg"
import image3 from "../../../public/home-page/Efficiency.svg"

const MissionValues = () => {
    return (
        <>
        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col pl-4 pr-4 pt-4">
            <h1 className="text-blue-950 text-center text-4xl font-light ">Our Mission and Vision</h1>
            <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
        </section>

        <section className=" grid h-full w-full grid-cols-1 bg-white p-2 text-black md:grid-cols-3 max-w-screen-lg mx-auto">
        <div className="m-4 p-4">
            <h1 className="mb-2 text-2xl font-light text-blue-950">
              <span className="text-4xl">01</span> Transparency
            </h1>
            <p className="font-light">
            Our process and pricing is fully exposed to our Client partners, there are no hidden fees or other "gotchas" when doing business with us.
            </p>
            <Image
          src={image1}
          width={500}
          height={100}
          alt="looking through documents to sign"
          className="pt-4"
        />
          </div>

          <div className="m-4 p-4 max-sm:pt-0">
            <h1 className="mb-2 text-2xl font-light text-blue-950">
              <span className="text-4xl">02</span> Certainty
            </h1>
            <p className="font-light">
              We contractually obligate ourselves to our profit margin and credit parameters, therefore the only variable in our process is the market.
            </p>
            <Image
          src={image2}
          width={500}
          height={100}
          alt="looking at charts and data for a loan"
          className="pt-4"
        />
          </div>

          <div className="m-4 p-4 max-sm:pt-0">
            <h1 className="mb-2 text-2xl font-light text-blue-950">
              <span className="text-4xl">03</span> Efficiency
            </h1>
            <p className="font-light"> 
            The process is efficient and predictable, with no unexpected fees like roll, extension, or pair-off fees. Pricing and guidelines are clear.
            </p>
            <Image
          src={image3}
          width={500}
          height={100}
          alt="shaking hands over a business deal"
          className="pt-4"
        />
          </div>
        </section>
        </>
    )
};

export default MissionValues;