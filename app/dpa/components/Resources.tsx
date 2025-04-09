import Image from "next/image";
import image1 from "../../../public/dpa/AMORTIZED-AllStates.svg";
import image2 from "../../../public/dpa/AMORTIZED-Washington.svg";
import image3 from "../../../public/dpa/FORGIVEABLE-AllStates.svg";
import image4 from "../../../public/dpa/fillable.svg";
import image5 from "../../../public/dpa/FAQ.svg";
import image6 from "../../../public/dpa/options.svg";

const Resources = () => {
    return (
        <>
        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
          <h1 className="text-blue-950 text-center text-4xl font-light ">
            Products and Programs
          </h1>
          <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
        </section>

        <section className="grid h-full w-full grid-cols-1 p-2 justify-items-center text-black md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_amortized_all_states.pdf" target="_blank">
              <Image
                src={image1}
                width={800}
                height={100}
                alt="Amortized All States document link"
                className="pt-4"
              />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_amortized_washington_state.pdf" target="_blank">
              <Image
                src={image2}
                width={800}
                height={100}
                alt="Amortized Washington State document link"
                className="pt-4"
              />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_forgivable_all_states.pdf" target="_blank">
              <Image
                src={image3}
                width={800}
                height={100}
                alt="Forgivable All States except NY & WA document link"
                className="pt-4"
              />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_down_payment_fillable.pdf" target="_blank">
              <Image
                src={image4}
                width={800}
                height={100}
                alt="Nationwide Down Payment Options (Fillable) document pdf"
                className="pt-4"
              />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_dpa_faq.pdf" target="_blank">
              <Image
                src={image5}
                width={800}
                height={100}
                alt="DPA FAQ document link"
                className="pt-4"
              />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
            <a href="https://essexcorrespondent.com/resources_down_payment.pdf" target="_blank">
              <Image
                src={image6}
                width={800}
                height={100}
                alt="Nationwide Down Payment Options document link"
                className="pt-4"
              />
            </a>
          </div>

          <div className="m-2 p-2 gap-4">
            <p className="text-blue-950 pb-4">
            * PDF must be downloaded to add custom logo.
            </p>
            <p className="text-gray-700">
            This is meant for business to business communication only and is subject to review and approval by the Correspondent's Compliance Department.
            </p>
          </div>
      </section>
      </>
    )
}

export default Resources;