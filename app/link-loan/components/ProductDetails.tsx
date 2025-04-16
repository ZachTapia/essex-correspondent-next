import Image from "next/image";
import image1 from "../../../public/link-loan/closings-today.svg";
import image2 from "../../../public/link-loan/entities.svg";
import image3 from "../../../public/link-loan/product1.svg";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <>
      <section className="bg-gray-200">
        <section className=" flex h-full w-full flex-col bg-gray-200 px-6 pt-4 pb-12 text-black md:flex-row mx-auto max-w-screen-lg">
          <div className="pt-4 pr-4">
            <Image
              src={image1}
              width={223}
              height={100}
              alt="Writing up a proposal eith a calculator"
              className="hidden md:block max-w-md"
            />
            <Image
              src={image2}
              width={230}
              height={100}
              alt="family hugging looking at their new home"
              className="pt-4 pr-2 mx-auto hidden md:block max-w-md"
            />
            <Image
              src={image3}
              width={230}
              height={100}
              alt="Couple looking at papers with their mortgage broker"
              className="pt-4 pr-2 mx-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <h1 className="pt-2 text-xl font-semibold text-blue-950">
              How This Product Increases Closings Today
            </h1>
            <p className="pb-4 text-black">
              Today when a potential borrower comes to your loan officer and you
              determine that they are not qualified for any of the financing
              options you offer, you would typically give them a &quot;To
              Do&quot; list of things they must improve on to qualify for a home
              loan. While this may result in a transaction 6 months to several
              years down the road, often they either never qualify, or they end
              up closing elsewhere down the road.
            </p>
            <p className="pb-4 text-black">
              Trio&apos;s product allows qualified consumers to identify a home
              within their monthly affordability range and you will facilitate
              purchase financing to a Governmental Entity.
            </p>
            <h1 className="text-xl font-semibold text-blue-950">
              How Does Your Company Use This Product?
            </h1>
            <p className="pb-4 text-black">
              Your company uses Trio&apos;s guidelines to prequalify consumers
              for the Link Loan. Trio makes all credit and eligibility decisions
              based on their flexible criteria, which may include alternatives
              to traditional income, credit, or legal status requirements.
            </p>
            <p className="pb-4 text-black">
              Once approved, the consumer selects a property, and the purchase
              is completed through a Government Entity. Your role is to
              originate the necessary financing to support the purchase and
              Trio&apos;s 40-year consumer agreement.
            </p>
            <p className="pb-4 text-black">
              Essex, acting as Trio&apos;s administrative partner, facilitates
              delivery and servicing of the loan. This product is designed to
              perform strongly and can positively impact your company&apos;s
              Compare Ratio.
            </p>
            <h1 className="text-xl font-semibold text-blue-950">
              Want to Learn More About Trio&apos;s Link Loan Program?
            </h1>
            <p className="pb-4 text-black">
              Our team is here to help. Connect with one of our experienced
              Account Executives to get answers to your questions.
            </p>
            <button className="border-2 border-blue-950/100 bg-blue-950 p-2 pl-8 pr-8 font-semibold text-white transition delay-150 duration-300 hover:scale-110 hover:bg-blue-950">
              <Link href="/about" target="_blank">
                CONTACT AN AE
              </Link>
            </button>
          </div>
        </section>
      </section>
      <section className="w-full bg-gray-200 h-[60px] sm:h-[70px] md:h-[90px] [clip-path:polygon(0_0,100%_0,50%_100%)] "></section>
    </>
  );
};

export default ProductDetails;
