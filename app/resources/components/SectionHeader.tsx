import Image from "next/image";
import image1 from "../../../public/resources/resources.svg";

const SectionHeader = () => {
  return (
    <section className="h-full w-full bg-gray-200">

        <div>
          <Image
          src={image1}
          alt="Our Team That Makes It Happen"
          width={3000}
           />
          </div>

    </section>
  );
};

export default SectionHeader;