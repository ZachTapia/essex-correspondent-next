import Image from "next/image";
import image1 from "../../../public/resources/essex-difference.svg";

const EssexDif = () => {
    return (

        <section className="h-full w-full bg-white pt-16 mx-auto max-sm:pt-8">

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

export default EssexDif;