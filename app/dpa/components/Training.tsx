import Image from "next/image";
import image1 from "../../../public/dpa/webinarVideo.svg";

const Training = () => {
  return (
    <>
      <section className="w-full h-full justify-items-center bg-white mx-auto max-w-5xl p-4 max-sm:pt-0">
        {" "}
        <div className="m-2 p-2 gap-4">
          {" "}
          <a
            href="https://drive.google.com/file/d/1EnQW7Y8kMxsVz7OMZc0SISZ15G1Sk47G/view?usp=sharing"
            target="_blank"
          >
            <Image
              src={image1}
              width={800}
              height={100}
              alt="Essex Mortgage DPA Webinar"
              className="pt-4"
            />{" "}
          </a>{" "}
        </div>{" "}
        <p className="text-gray-600 text-center text-lg pb-6">
          {" "}
          2026 NATIONAL DPA PREOGRAM WEBINAR{" "}
        </p>{" "}
      </section>
    </>
  );
};

export default Training;
