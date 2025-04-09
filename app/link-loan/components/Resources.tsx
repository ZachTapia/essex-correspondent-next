import Image from "next/image";
import image1 from "../../../public/link-loan/link-matrix.svg";

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

      </section>
      <div className="m-2 p-2 text-lg text-center mx-auto max-w-screen-lg">
            <p className="text-blue-950 pb-4">
            This is meant for business to business communication only and is subject to review and approval by the Correspondent's Compliance Department.
            </p>
          </div>
      </>
    )
}

export default Resources;