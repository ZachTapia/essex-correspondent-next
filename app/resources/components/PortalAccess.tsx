import Image from "next/image";
import image1 from "../../../public/resources/service-request.png";
import image2 from "../../../public/resources/create-loan.png";

const PortalAccess = () => {
    return (
        <>
        <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col p-4 pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Portal Access
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className="grid h-full w-full grid-cols-1 p-2 justify-items-center text-black md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="m-2 p-2 gap-4">
            <a href="https://essexmortgage1-my.sharepoint.com/personal/ztapia_essexmortgage_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fztapia%5Fessexmortgage%5Fcom%2FDocuments%2FAttachments%2FLaura%20Mac%2E%20Create%20a%20Loan%20V1%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E489b474c%2D13e6%2D4b00%2D81c7%2Dcd7cf5988719" target="_blank">
            <Image
              src={image2}
              width={800}
              height={100}
              alt="Required Documents"
              className="pt-4"
            />
            </a>
            <p className="text-center pt-4 text-gray-600 text-lg">
                CREATE A LOAN
            </p>
          </div>

          <div className="m-2 p-2 gap-4">
          <a href="https://essexmortgage1-my.sharepoint.com/personal/ztapia_essexmortgage_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fztapia%5Fessexmortgage%5Fcom%2FDocuments%2FAttachments%2FLaura%20Mac%2E%20Service%20Requests%20V1%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E6febbec7%2Dabfa%2D4132%2Db452%2D700ebb6330cf" target="_blank">
            <Image
              src={image1}
              width={800}
              height={100}
              alt="Nationwide Down Payment Options"
              className="pt-4"
            />
            </a>
            <p className="text-center pt-4 text-gray-600 text-lg">
                SERVICE REQUEST
            </p>
          </div>

        </section>

      </>
    )
}

export default PortalAccess;