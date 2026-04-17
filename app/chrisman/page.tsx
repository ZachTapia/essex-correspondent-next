import Image from "next/image";
import image1 from "../../public/contact/contact.svg";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

export default function ChrismanContactForm() {
  return (
    <>
    <NavBar />
      <section className="w-full h-full bg-gray-200">
        <div>
          <Image
            src={image1}
            alt="Our Team That Makes It Happen"
            width={3000}
          />
        </div>
        <div className="w-full bg-gray-200 mx-auto max-w-5xl flex flex-col p-4 pt-10 max-sm:pt-10 rounded-lg overflow-hidden shadow">
          <iframe
            src="https://airtable.com/embed/appaCkjJJOhvI0Jh9/pagi3GSWIhDrkkuuJ/form"
            title="Airtable Contact Form"
            className="w-full h-133.25"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
