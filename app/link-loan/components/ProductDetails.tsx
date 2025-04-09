import Image from "next/image";
import image1 from "../../../public/link-loan/closings-today.svg"
import image2 from "../../../public/link-loan/entities.svg"
import image3 from "../../../public/link-loan/product1.svg"
import image4 from "../../../public/link-loan/products2.svg"



const ProductDetails = () => {
    return (
      <>
      <section className= "bg-gray-200">
        <section className=" flex h-full w-full flex-col bg-gray-200 px-6 pt-4 pb-12 text-black md:flex-row mx-auto max-w-screen-lg">
            <div className="pt-4 pr-4">
            <Image
            src={image1}
            width={233}
            height={100}
            alt="Writing up a proposal eith a calculator"
            className="hidden md:block max-w-md"
          />
            <Image
            src={image2}
            width={240}
            height={100}
            alt="family hugging looking at their new home"
            className="pt-4 pr-2 mx-auto hidden md:block max-w-md"
          />
          <Image
            src={image3}
            width={240}
            height={100}
            alt="Couple looking at papers with their mortgage broker"
            className="pt-4 pr-2 mx-auto"
          />
          <Image
            src={image4}
            width={240}
            height={100}
            alt="Signing papers for a new home"
            className="pt-4 pr-2 mx-auto hidden md:block max-w-md"
          />
          </div>
            <div className="flex-1 text-left">
            <h1 className="pt-2 text-xl font-semibold text-blue-950">
            How This Product Increases Closings Today
            </h1>
            <p className="pb-4 text-black">
            Today when a potential borrower comes to your loan officer and you determine that they are not qualified for any of the financing options you offer, you would typically give them a "To Do" list of things they must improve on to qualify for a home loan. While this may result in a transaction 6 months to several years down the road, often they either never qualify, or they end up closing elsewhere down the road.
            </p>
            <p className="pb-4 text-black">
            Our product allows qualified consumers to identify a home within their monthly affordability range and you will facilitate purchase financing to a Governmental Entity.
            </p>
            <h1 className="text-xl font-semibold text-blue-950">
            Who Are These Entities?
            </h1>
            <p className="pb-4 text-black">
            These Entities are one of several Indian Tribes that are qualified under a HUD program to purchase properties on an investment basis, allowing consumers the right to enjoy most of the benefits of homeownership through a 40-year Financing agreement they execute with the Tribe.
            </p>
            <h1 className="text-xl font-semibold text-blue-950">
            How Does Your Company Use This Product?
            </h1>
            <p className="pb-4 text-black">
            You would use guidelines set by Trio for prequalification for their programs. Trio's program has more flexibility on typical requirements for income verification, legal status and credit score. Once qualified, you will issue a letter to the consumer indicating the maximum payment/purchase price they can afford. The consumer will then identify and execute a purchase contract with a seller on a property that they qualify for. This contract must then be assigned to the Entity who will be the actual purchaser of the property.
            </p>
            <p className="pb-4 text-black">
            Once the purchase assignment is signed by all parties, you will create 2 loans to the Government Entity to finance the purchase as well as create a file for the 40-year financing agreement to the consumer. You will make a 96.5% FHA 1st and a 1% Forgivable deferred 2nd to finance the purchase.
            </p>
            <p className="pb-4 text-black">
            The FHA 1st and 40-year financing files are locked and delivered to Essex per standard procedures. The 2nd requires no registration or lock and is not delivered to Essex but reimbursed by IHFC through Trio post close. The FHA 1st is sold to Essex servicing released. This product will positively impact your company's Compare Ratio as the performance is 100% on time. Essex securitizes this product and is the master servicer as well.
            </p>
            </div>
        </section>
        </section>
        <section className="w-full bg-gray-200 h-[60px] sm:h-[70px] md:h-[90px] [clip-path:polygon(0_0,100%_0,50%_100%)] "></section>
        </>
    )
};

export default ProductDetails;