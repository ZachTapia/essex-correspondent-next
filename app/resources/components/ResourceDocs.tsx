import Image from "next/image";
import image1 from "../../../public/resources/required-docs.svg";
import image2 from "../../../public/resources/dp-options.svg";
import image3 from "../../../public/resources/gnma.svg";

const ResourceDocs = () => {
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
            <a href="https://essexcorrespondent.com/resources_application.pdf" target="_blank">
            <Image
              src={image1}
              width={800}
              height={100}
              alt="Required Documents"
              className="pt-4"
            />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
          <a href="https://essexcorrespondent.com/resources_down_payment.pdf" target="_blank">
            <Image
              src={image2}
              width={800}
              height={100}
              alt="Nationwide Down Payment Options"
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
              alt="Image of Diane"
              className="pt-4"
            />
            </a>
          </div>

          <div className="m-2 p-2 gap-4 text-gray-400">
            <h1>
                * Check with your representative for further details on state requirements
            </h1>
          </div>
        </section>
      </>
    )
}

export default ResourceDocs;