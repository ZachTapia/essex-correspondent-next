const MarketingMaterials = () => {
  return (
    <>
      <section className="w-full h-full bg-white mx-auto max-w-screen-lg flex flex-col pt-10 max-sm:pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Marketing Materials
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className="flex flex-col items-center justify-center text-black max-w-screen-lg mx-auto p-4 text-center">
        <h1 className="text-blue-950">
          Download our latest marketing materials and resources
        </h1>

        <div className="grid grid-cols-3 gap-4 pt-6 text-center">
          <a
            href="/resources/resources_close_more_deals.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-blue-950 text-white hover:bg-gray-600 transition"
          >
            Close More Deals
          </a>

          <a
            href="/resources/resources_reach_more_borrowers.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-blue-950 text-white hover:bg-gray-600 transition"
          >
            Reach More Borrowers
          </a>

          <a
            href="/resources/resources_partner_with_us.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-blue-950 text-white hover:bg-gray-600 transition"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </>
  );
};

export default MarketingMaterials;
