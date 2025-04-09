import Image from "next/image";
import image1 from "../../../public/contact/lending.svg";

const LendingRedefined = () => {
    return (

        <section className="h-full w-full bg-white pt-2 mx-auto">

        <div>
        <a href="/products" target="_blank">
          <Image
          src={image1}
          alt="Affordable Lending Redefined"
          width={2000}
           />
           </a>
          </div>

    </section>

    )
}

export default LendingRedefined;