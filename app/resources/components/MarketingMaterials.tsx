import { CustomizeButton } from "../../dpa/components/CustomizePdf";

const materials = [
  [
    { href: "/resources/resources_close_more_deals.pdf", label: "Close More Deals" },
    { href: "/resources/resources_reach_more_borrowers.pdf", label: "Reach More Borrowers" },
    { href: "/resources/resources_partner_with_us.pdf", label: "Partner With Us" },
  ],
  [
    { href: "/resources/close-more-deals-esp-dpa.pdf", label: "Cierre Más Tratos" },
    { href: "/resources/reach-more-borrowers-esp-dpa.pdf", label: "Llegue a Más Prestatarios" },
    { href: "/resources/esp-partner-with-us-dpa.pdf", label: "Asóciese con Nosotros" },
  ],
];

const MarketingMaterials = () => {
  return (
    <>
      <section className="w-full h-full bg-white mx-auto max-w-5xl flex flex-col pt-10 max-sm:pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Marketing Materials
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <section className="flex flex-col items-center justify-center text-black max-w-5xl mx-auto p-4 text-center">
        <h1 className="text-blue-950">
          Download our latest marketing materials and resources
        </h1>

        {materials.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 gap-4 text-center ${i === 0 ? "pt-6" : "pt-4"}`}>
            {row.map((m) => (
              <div key={m.href} className="flex flex-col gap-2">
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-blue-950 text-white hover:bg-gray-600 transition">
                  {m.label}
                </a>
                <CustomizeButton
                  href={m.href}
                  title={m.label}
                  className="text-sm text-blue-950 underline hover:text-gray-600"
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default MarketingMaterials;
