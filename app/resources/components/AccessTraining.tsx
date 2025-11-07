import Image from "next/image";
import image1 from "../../../public/dpa/webinarVideo.svg";

const AccessTraining = () => {

    return (
      <section className="w-full h-full justify-items-center bg-white mx-auto max-w-screen-lg p-4 max-sm:pt-0">
        <div className="m-2 p-2 gap-4">
        <button type="button" className="cursor-pointer">
          <Image
            src={image1}
            width={800}
            height={100}
            alt="Essex Mortgage DPA Webinar"
            className="pt-4"
          />
        </button>
        </div>
        <p className="text-gray-600 text-center text-lg pb-2">
          2025 NATIONAL DPA PROGRAM WEBINAR
        </p>
        
      </section>
    );
}
export default AccessTraining;
  