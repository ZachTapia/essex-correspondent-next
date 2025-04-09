import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/dpa/webinarVideo.svg";

const Training = () => {
    return (
        <>
        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
          <h1 className="text-blue-950 text-center text-4xl font-light ">
            Training
          </h1>
          <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
        </section>

        <section className="w-full h-full justify-items-center bg-white mx-auto max-w-screen-lg p-4 max-sm:pt-0">
        <div className="m-2 p-2 gap-4">
            <a href="https://us02web.zoom.us/rec/play/CfyFeea4bqfTKPPNQd4e2jXsGv_WsuadhsH3gABn0eAoNijTEamq93tccqHB8DqwGlLAr1AR5bI3WfJ6.Fh4udzAuYc4Hj0iN?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FI1TkHhnCZhoO_PEEGoti-Nd9u1bkx00dJTNDxpvzszUvVAob-dt_aP5qWeJ-g9B0.z72-Lb8DdbvCUKwI" target="_blank">
              <Image
                src={image1}
                width={800}
                height={100}
                alt="Essex Mortgage DPA Webinar"
                className="pt-4"
              />
            </a>
          </div>
          <p className="text-gray-600 text-center text-lg pb-6">
            2025 NATIONAL DPA PREOGRAM WEBINAR
          </p>
          <button className="border-2 border-blue-950/100 bg-blue-950 p-4 pl-10 pr-10 font-semibold text-white transition delay-150 duration-300 hover:scale-110 hover:bg-gray-300">
          <Link
          href="https://essexcorrespondent.com/dpa_webinar_2025.pdf" target="_blank">DOWNLOAD PDF
          </Link>
        </button>
        </section>
        </>
    )
}

export default Training;