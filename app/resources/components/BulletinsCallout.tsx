
const BulletinsCallout = () => {
  return (
    <>
      <section className="w-full h-full bg-white mx-auto max-w-5xl flex flex-col pt-10 max-sm:pt-10">
        <h1 className="text-blue-950 text-center text-4xl font-light ">
          Bulletins
        </h1>
        <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
      </section>

      <p
        style={{
          maxWidth: 560,
          margin: "0 auto 32px",
          fontSize: 16,
          lineHeight: 1.6,
          color: "#092866",
          textAlign: "center",
        }}
      >
        Program updates, policy changes, and important announcements for our
        correspondent partners — posted as they&rsquo;re released.
      </p>

      <section className="flex items-center justify-center text-black max-w-5xl mx-auto  text-center">
        <a
          href="/bulletins"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-blue-950 text-white hover:bg-gray-600 transition"
        >
          View Bulletins
        </a>
      </section>
    </>
  );
};

export default BulletinsCallout;