import Image from "next/image";
import image1 from "../../../public/dpa/webinarVideo.svg";

const AccessTraining = () => {
  return (
    <section className="w-full h-full justify-items-center bg-white mx-auto max-w-5xl p-4 max-sm:pt-0">
      <div className="m-2 p-2 gap-4">
        <a
          href="https://us02web.zoom.us/rec/play/J66TTLCmHK99EXGjt7GlKlWnhaXsAnaHyXdWVzxTwbRnWB8HJuSER9-nuagsaTw93nDUe6g_ucGMxWH1.mIh6NiGOIqQ4BJ24?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FMm_rh6uR_JEb55qFmW1ZdBpIi8aWXIvZjV-EZh1HPIpqpzdg_EUokaATqBqZEKQK.gs7pknmARh9Bk9UM"
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
