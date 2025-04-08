import Image from "next/image";
import image1 from "../../../public/about-page/tmap.svg"

const TerritoryMap = () => {
    return (
        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col pl-4 pr-4 pt-8">
            <h1 className="text-blue-950 text-center text-4xl font-light ">Account Executive Sales Territory Map</h1>
            <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
          <div className="m-4 p-4 justify-items-center">
            <Image
          src={image1}
          width={700}
          height={100}
          alt="Executive territory map"
          className="pt-4"
        />
        </div>
        </section>

    )
}

export default TerritoryMap;