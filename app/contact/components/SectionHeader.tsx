import Image from "next/image";
import image1 from "../../../public/contact/contact.svg";

const SectionHeader = () => {
  return (
    <section className="h-full w-full bg-gray-200">

        <div>
          <Image
          src={image1}
          alt="Products and Programs"
          width={3000}
           />
          </div>

    </section>
  );
};

export default SectionHeader;