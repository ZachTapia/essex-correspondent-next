export default function ContactUs() {

  return (
    <>
        <section className="w-full h-full bg-gray-200 mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
       
        <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow">
          <iframe
            src="https://airtable.com/embed/appaCkjJJOhvI0Jh9/pagKjI9DSXhtY3359/form"
            title="Airtable Contact Form"
            className="w-full h-[533px]"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
            }}
          />
        </div>
       
        </section>
    </>
  );
}