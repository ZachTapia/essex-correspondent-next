import Link from "next/link";
import Image from "next/image";
import image1 from "../../../public/products-programs/dpa.svg";
import image2 from "../../../public/products-programs/govt-ent.svg";
import image4 from "../../../public/products-programs/Fillable.svg";

const ProductsPrograms = () => {
  return (
    <>
      <section className="bg-white pb-4">
        <section className="w-full h-full bg-white mx-auto max-w-5xl flex flex-col p-4 pt-10 max-sm:pt-10">
          <h1 className="text-blue-950 text-center text-4xl font-light ">
            Products and Programs
          </h1>
          <hr className="w-40 h-1.5 mx-auto bg-white border-0 my-4 dark:bg-blue-950"></hr>
        </section>

        <section className="grid h-full w-full grid-cols-1 p-2 justify-items-center text-black md:grid-cols-2 max-w-5xl mx-auto">
          <div className="m-2 p-2 gap-4">
            <Link href="/dpa" target="_blank">
              <Image
                src={image1}
                width={800}
                height={100}
                alt="Down Payment Assistance"
                className="pt-4"
              />
            </Link>
          </div>

          <div className="m-2 p-2 gap-4">
            <a href="/link-loan" target="_blank">
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
          <a
            href="/dpa/resources_down_payment_fillable.pdf"
            target="_blank"
          >
            <Image
              src={image4}
              width={800}
              height={100}
              alt="Nationwide Down Payment Options (Fillable) document pdf"
              className="pt-4"
            />
          </a>
        </div>

        <div className="m-2 p-4 gap-4">
          <p className="text-red-700 pb-4">
            * Adobe Acrobat Pro must be used to add custome images and logos to
            fillable flyers
          </p>
          <p className="text-gray-700">
            This is meant for business to business communication only and is
            subject to review and approval by the Correspondent&apos;s
            Compliance Department.
          </p>
        </div>

          {/* <div className="m-2 p-2 gap-4">
            <a href="/products-programs/Basic-Product-Flow.pdf/" target="_blank">
              <Image
                src={image3}
                width={800}
                height={100}
                alt="Essex Product Flow"
                className="pt-4"
              />
            </a>
          </div> */}
        </section>
      </section>
    </>
  );
};

export default ProductsPrograms;
