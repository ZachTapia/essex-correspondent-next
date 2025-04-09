import Image from "next/image";
import image1 from "../../../public/products-programs/pricing-model.svg"
import image2 from "../../../public/products-programs/credit-policy.svg"
import image3 from "../../../public/products-programs/servicing-revenue.svg"
import image4 from "../../../public//products-programs/nationwide-options.svg"

const EssexWay = () => {
    return (
        <>
        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col pl-4 pr-4 pt-4">
            <h1 className="text-blue-950 text-center text-4xl font-light ">The Essex Way</h1>
            <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
            <p className="text-black text-center text-lg">
            We empower our clients to take control of their futures so they can serve their teams and borrowers 100% of the time - not just when the market is favorable. Our offerings are backed by a business model designed to give you flexability, transparency, and long-term growth potential.
          </p>
          <h2 className="text-blue-950 text-center text-2xl font-light pt-8 ">
            When You Work With Essex:
          </h2>
        </section>

        <section className=" grid h-full w-full grid-cols-1 bg-white p-2 text-black md:grid-cols-4 max-w-screen-lg mx-auto">
        <div className="m-4 p-2">
        <Image
          src={image1}
          width={500}
          height={100}
          alt="Calculator"
          className="pt-4"
        />
            <h1 className="mb-2 pt-4 text-lg text-blue-950">
              Transparent Pricing Model
            </h1>
            <p className="font-light">
            Know exactly what you're getting, every time.
            </p>
          </div>

          <div className="m-4 p-2 max-sm:pt-0">
          <Image
          src={image2}
          width={500}
          height={100}
          alt="Credit score"
          className="pt-4"
        />
            <h1 className="mb-2 pt-4 text-lg text-blue-950">
              Dictate Your Own Credit Policy
            </h1>
            <p className="font-light">
              You stay in control of your guidelines.
            </p>
          </div>

          <div className="m-4 p-2 max-sm:pt-0">
          <Image
          src={image3}
          width={500}
          height={100}
          alt="increased revenue"
          className="pt-4"
        />
            <h1 className="mb-2 pt-4 text-lg text-blue-950">
             Participate in Long-Term Servicing Revenue
            </h1>
            <p className="font-light"> 
            Build value beyond the transaction.
            </p>
          </div>

          <div className="m-4 p-2 max-sm:pt-0">
          <Image
          src={image4}
          width={500}
          height={100}
          alt="moving"
          className="pt-4"
        />
            <h1 className="mb-2 pt-4 text-lg text-blue-950">
             Nationwide Down Payment Options
            </h1>
            <p className="font-light"> 
            Help more borrowers become homeowners.
            </p>
          </div>
        </section>
        </>
    )
};

export default EssexWay;