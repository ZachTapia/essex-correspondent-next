import Image from "next/image";
import image1 from "../../../public/link-loan/link-matrix.svg";
import image2 from "../../../public/link-loan/ll-website.svg";
import image3 from "../../../public/link-loan/LinkLoanFillable.svg";

const Resources = () => {
  return (
    <>
      <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Resources
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

        <section className="grid h-full w-full grid-cols-1 p-2 justify-items-center text-black md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_link_loan_overview.pdf" target="_blank">
              <Image
                src={image1}
                width={800}
                height={100}
                alt="Link Loan Program Overview document link"
                className="pt-4"
              />
            </a>
          </div>
          <div className="m-2 p-2 gap-4">
            <a href="https://www.mylinkloan.com/" target="_blank">
              <Image
                src={image2}
                width={800}
                height={100}
                alt="Link Loan Website"
                className="pt-4"
              />
            </a>
          </div>
      </section>

      <section className="grid h-full w-full grid-cols-1 p-2 justify-items-center text-black md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="m-2 p-2 gap-4">
            <a href="/FillableLinkLoanSummary.pdf" target="_blank">
              <Image
                src={image3}
                width={800}
                height={100}
                alt="Link Loan Program Overview document link"
                className="pt-4"
              />
            </a>
          </div>
          <div className="gap-4 m-2 p-2 pt-6 text-lg  mx-auto max-w-screen-lg">
            <p className="text-red-500 pb-2">
            * Adobe Acrobat Pro must be used to add custome images and logos to fillable flyers
            </p>
          <p className="text-blue-950 pb-4">
            This is meant for business to business communication only and is subject to review and approval by the Correspondent's Compliance Department.
            </p>
          </div>
      </section>
      </>
    )
}

export default Resources;
