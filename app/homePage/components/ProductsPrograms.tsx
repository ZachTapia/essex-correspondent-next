import Image from "next/image";
import image1 from "../../../public/home-page/products-programs.svg";

const ProductsPrograms = () => {
    return (

        <section className="h-full w-full bg-white pt-24 mx-auto max-sm:pt-8">

        <div>
          <Image
          src={image1}
          alt="Essex products and programs"
          width={2000}
           />
          </div>

    </section>

    )
}

export default ProductsPrograms;