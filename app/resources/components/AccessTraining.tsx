import Image from "next/image";
import image1 from "../../../public/dpa/webinarVideo.svg";

const AccessTraining = () => {
  return (
    <section className="w-full h-full justify-items-center bg-white mx-auto max-w-screen-lg p-4 max-sm:pt-0">
      <div className="m-2 p-2 gap-4">
        <a
          href="https://us02web.zoom.us/rec/play/CfyFeea4bqfTKPPNQd4e2jXsGv_WsuadhsH3gABn0eAoNijTEamq93tccqHB8DqwGlLAr1AR5bI3WfJ6.Fh4udzAuYc4Hj0iN?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FI1TkHhnCZhoO_PEEGoti-Nd9u1bkx00dJTNDxpvzszUvVAob-dt_aP5qWeJ-g9B0.z72-Lb8DdbvCUKwI"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            src={image1}
            width={800}
            height={100}
            alt="Essex Mortgage DPA Webinar"
            className="pt-4"
          />
        </a>
      </div>
      <p className="text-gray-600 text-center text-lg pb-2">
        2025 NATIONAL DPA PROGRAM WEBINAR
      </p>
    </section>
  );
};
export default AccessTraining;
