import Image from "next/image";
import image1 from "../../../../public/home-page/home-header.svg";

const SectionHeader = () => {
  return (
    <section className="h-full w-full bg-white">

        <div>
          <Image
          src={image1}
          alt="Redefining mortgage lending for over 35 years"
          width={3000}
           />
          </div>

    </section>
  );
};

export default SectionHeader;