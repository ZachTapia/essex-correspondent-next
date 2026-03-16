import Image from "next/image";
import image1 from "../../../public/dpa/AMORTIZED-AllStates.svg";
import image2 from "../../../public/dpa/AMORTIZED-Washington.svg";
import image3 from "../../../public/dpa/FORGIVEABLE-AllStates.svg";
// import image4 from "../../../public/dpa/fillable.svg";
import image5 from "../../../public/dpa/FAQ.svg";
import image6 from "../../../public/dpa/options.svg";

const Resources = () => {
  return (
    <>
    <section className= "bg-gray-200">
      <section className="w-full h-full bg-gray-200 mx-auto max-w-5xl flex flex-col p-4 pt-10 max-sm:pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Products and Programs
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className="grid h-full w-full grid-cols-1 p-2 bg-gray-200 justify-items-center text-black md:grid-cols-2 max-w-5xl mx-auto">
        <div className="m-2 p-2 gap-4">
          <a
            href="/dpa/resources_amortized_all_states.pdf"
            target="_blank"
          >
            <Image
              src={image1}
              width={800}
              height={100}
              alt="Amortized All States except NY and WA document link"
              className="pt-4"
            />
          </a>
        </div>

        <div className="m-2 p-2 gap-4">
          <a
            href="/dpa/Term_Sheet_Washington_State_03.16.26.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <a
            href="/dpa/DPA-Correspondent-3-Year-Forgivable_3.2.2026.pdf"
            target="_blank"
          >
            <Image
              src={image3}
              width={800}
              height={100}
              alt="Forgivable All States except NY & WA document link"
              className="pt-4"
            />
          </a>
        </div>

        {/* <div className="m-2 p-2 gap-4">
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
        </div> */}

        <div className="m-2 p-2 gap-4">
          <a
            href="/dpa/resources_dpa_faq.pdf"
            target="_blank"
          >
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
          <a
            href="/resources/Essex_DPA_Options.pdf"
            target="_blank"
          >
            <Image
              src={image6}
              width={800}
              height={100}
              alt="Nationwide Down Payment Options document link"
              className="pt-4"
            />
          </a>
        </div>

        
      </section>
      </section>
      <section className="w-full bg-gray-200 h-15 sm:h-17.5 md:h-22.5 [clip-path:polygon(0_0,100%_0,50%_100%)]"></section>
    </>
  );
};

export default Resources;
