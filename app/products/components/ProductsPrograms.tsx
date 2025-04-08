import Image from "next/image";
import image1 from "../../../public/products-programs/dpa.svg";
import image2 from "../../../public/products-programs/link-loan.svg";
import image3 from "../../../public/products-programs/trio.svg";

const ProductsPrograms = () => {
    return (
<>
<section className="bg-gray-200 pb-4">
        <section className="w-full h-full bg-gray-200 mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Products and Programs
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className="grid h-full w-full grid-cols-1 p-2 justify-items-center text-black md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="m-2 p-2 gap-4">
            <a href="" target="_blank">
            <Image
              src={image1}
              width={800}
              height={100}
              alt="Down Payment Assistance"
              className="pt-4"
            />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
          <a href="" target="_blank">
            <Image
              src={image2}
              width={800}
              height={100}
              alt="Essex Link Loan"
              className="pt-4"
            />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
          <a href="" target="_blank">
            <Image
              src={image3}
              width={800}
              height={100}
              alt="TRIO Program (TBA)"
              className="pt-4"
            />
            </a>
          </div>

        </section>

        </section>

        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
            <h1 className="text-blue-950 text-center text-2xl font-light pb-4 ">
                There's the Old Way, and the Essex Way. Welcome to the Essex Way.
            </h1>
        </section>
      </>
    )
}

export default ProductsPrograms;