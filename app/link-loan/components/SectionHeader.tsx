import Image from "next/image";
import image1 from "../../../public/link-loan/link-header.svg";

const SectionHeader = () => {
  return (
    <section className="h-full w-full bg-white">

        <div>
          <Image
          src={image1}
          alt="Essex Link Loan"
          width={3000}
           />
          </div>

    </section>
  );
};

export default SectionHeader;