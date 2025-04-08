import Image from "next/image";
import image1 from "../../../public/resources/essex-difference.svg";

const EssexDifference = () => {
    return (

        <section className="h-full w-full bg-white pt-2 mx-auto ">

        <div>
        <a href="/about" target="_blank">
          <Image
          src={image1}
          alt="Essex products and programs"
          width={2000}
           />
           </a>
          </div>

    </section>

    )
}

export default EssexDifference;