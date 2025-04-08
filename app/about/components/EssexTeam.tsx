import Image from "next/image";
import image1 from "../../../public/about-page/_r_weedon.png";
import image2 from "../../../public/about-page/_d_nichols.png";
import image3 from "../../../public/about-page/_d_vance.png";
import image4 from "../../../public/about-page/_m_walker.png";
import image5 from "../../../public/about-page/_s_endresen.png";
import image6 from "../../../public/about-page/_c_howley.png";
import image7 from "../../../public/about-page/_c_nager.png";
import image8 from "../../../public/about-page/_d_sears.png";

const EssexTeam = () => {
  return (
    <>
      <section className="bg-gray-200">
        <section className="w-full h-full bg-gray-200 mx-auto max-w-screen-lg flex flex-col pl-4 pr-4 pt-6">
          <h1 className="text-blue-950 text-center text-4xl font-light ">
            The ESSEX Team
          </h1>
          <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
          <p className="text-black text-center text-lg">
            OUR TEAM THAT MAKES IT HAPPEN
          </p>
          <p className="pt-4 text-black text-center text-sm pb-4">
            The Essex Correspondent Team has decades of experience in Mortgage
            Banking and Correspondent Lending. We know that without successful
            Clients, we ourselves cannot be successful. Our platform was created
            around building "win/win" long term partnerships. We are the Team
            that can make things happen for you!
          </p>
        </section>

        <section className="grid h-full w-full grid-cols-1 p-2 text-black md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="m-2 p-2 flex max-sm:flex-col max-sm:items-center items-start gap-4">
            <Image
              src={image1}
              width={300}
              height={100}
              alt="Image of Roland"
              className="pt-4"
            />
            <div className="flex flex-col max-sm:text-center">
              <h1 className=" text-lg font-light text-blue-950 pt-2">
                <span className="font-bold">ROLAND</span> WEEDON
              </h1>
              <p className=" font-semibold text-gray-800">Owner & CEO</p>
              <p className="font-light text-sm text-gray-800 pt-4 max-sm:block">
                Hailing from Essex, England, Roland Weedon founded Essex
                Mortgage in 1986. With a background in education, Roland
                remained adamant that educating the client would be the
                company's #1 priority.
              </p>
            </div>
          </div>

          <div className="m-2 p-2 flex max-sm:flex-col max-sm:items-center items-start gap-4">
            <Image
              src={image2}
              width={300}
              height={100}
              alt="Image of Diane"
              className="pt-4"
            />
            <div className="flex flex-col max-sm:text-center">
              <h1 className=" text-lg font-light text-blue-950 pt-2">
                <span className="font-bold">DIANE</span> NICHOLS
              </h1>
              <p className=" font-semibold text-gray-800">President</p>
              <p className="font-light text-sm text-gray-800 pt-4">
                Diane Nichols, President / Chief Operations Officers, joined
                Essex Mortgage in 2010 where she originally took on the role as
                our Operations Manager. Shortly after, she was appointed
                Director of Operations to help oversee the entire operations
                team.
              </p>
            </div>
          </div>
        </section>

        <section className=" grid h-full w-full grid-cols-1 p-2 text-black md:grid-cols-3 max-w-screen-lg mx-auto text-center">
          <div className="m-2 p-2 items-start gap-4 justify-items-center">
            <Image
              src={image4}
              width={175}
              height={100}
              alt="Image of Mike"
              className="pt-4"
            />
            <h1 className=" text-lg font-light text-blue-950 pt-2">
              <span className="font-bold">MIKE</span> WALKER
            </h1>
            <p className=" font-light text-sm text-gray-800">
              National Account Executive
            </p>
            <p className="font-light text-sm text-gray-800 pt-4">
              714.401.9121
            </p>
            <p className="font-light text-sm text-gray-800">
              mwalker@essexmortgage.com
            </p>
          </div>

          <div className="m-2 p-2 items-start gap-4 justify-items-center">
            <Image
              src={image3}
              width={175}
              height={100}
              alt="Image of Duncan"
              className="pt-4"
            />
            <h1 className=" text-lg font-light text-blue-950 pt-2">
              <span className="font-bold">DUNCAN</span> VANCE
            </h1>
            <p className=" font-light text-sm text-gray-800">
              National Account Executive
            </p>
            <p className="font-light text-sm text-gray-800 pt-4">
              248.259.5600
            </p>
            <p className="font-light text-sm text-gray-800">
              dvance@essexmortgage.com
            </p>
          </div>

          <div className="m-2 p-2 items-start gap-4 justify-items-center">
            <Image
              src={image5}
              width={175}
              height={100}
              alt="Image of Shirley"
              className="pt-4"
            />
            <h1 className=" text-lg font-light text-blue-950 pt-2">
              <span className="font-bold">SHIRLEY</span> ENDRESEN
            </h1>
            <p className=" font-light text-sm text-gray-800">
              National Account Executive
            </p>
            <p className="font-light text-sm text-gray-800 pt-4">
              714.318.9666
            </p>
            <p className="font-light text-sm text-gray-800">
              shirley@essexmortgage.com
            </p>
          </div>


          <div className="m-2 p-2 items-start gap-4 justify-items-center">
            <Image
              src={image6}
              width={175}
              height={100}
              alt="Image of Chris"
              className="pt-4"
            />
            <h1 className=" text-lg font-light text-blue-950 pt-2">
              <span className="font-bold">CHRIS</span> HOWLE
            </h1>
            <p className=" font-light text-sm text-gray-800">
              National Account Executive
            </p>
            <p className="font-light text-sm text-gray-800 pt-4">
            818.288.4093
            </p>
            <p className="font-light text-sm text-gray-800">
            chowley@essexmortgage.com
            </p>
          </div>


          <div className="m-2 p-2 items-start gap-4 justify-items-center">
            <Image
              src={image7}
              width={175}
              height={100}
              alt="Image of Charlie"
              className="pt-4"
            />
            <h1 className=" text-lg font-light text-blue-950 pt-2">
              <span className="font-bold">CHARLIE</span> NAGER
            </h1>
            <p className=" font-light text-sm text-gray-800">
              National Account Executive
            </p>
            <p className="font-light text-sm text-gray-800 pt-4">
            714.919.8021
            </p>
            <p className="font-light text-sm text-gray-800">
            cnager@essexmortgage.com
            </p>
          </div>


          <div className="m-2 p-2 items-start gap-4 justify-items-center">
            <Image
              src={image8}
              width={175}
              height={100}
              alt="Image of David"
              className="pt-4"
            />
            <h1 className=" text-lg font-light text-blue-950 pt-2">
              <span className="font-bold">DAVID</span> SEARS
            </h1>
            <p className=" font-light text-sm text-gray-800">
              National Account Executive
            </p>
            <p className="font-light text-sm text-gray-800 pt-4">
            214.725.7517
            </p>
            <p className="font-light text-sm text-gray-800">
            dsears@essexmortgage.com
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default EssexTeam;
