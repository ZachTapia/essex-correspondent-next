

const GetInTouch = () => {
    return (
        <>
          <section className="bg-gray-200 pb-4">
        <section className="w-full h-full bg-gray-200 mx-auto max-w-screen-lg flex flex-col p-4 pt-10 max-sm:pt-10">
          <h1 className="text-blue-950 text-center text-4xl font-light ">
            Get in Touch
          </h1>
          <hr className="w-40 h-1.5 mx-auto bg-gray-100 border-0 my-4 dark:bg-blue-950"></hr>
        </section>
    
          <section className="mx-auto h-full w-full bg-gray-200 px-4 pb-6 text-black md:flex-row">
            <form
              className="mx-auto grid max-w-screen-lg grid-cols-2 gap-2 bg-gray-200 p-4"
            >
              <div className="col-span-1">
                <label className="block p-4">
                  First Name: <span className="required text-red-600">*</span>
                  <input
                    type="text"
                    name="firstName"
                    className="mt-1 block w-full border border-white bg-white px-3 py-2"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="block p-4">
                  Email: <span className="required text-red-600">*</span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full border border-white bg-white px-3 py-2"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label className="block p-4">
                  Phone:{" "}
                  <input
                    
                    name="phoneNumber"
                    className="mt-1 block w-full border border-white bg-white px-3 py-2"
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="block p-4">
                  Message: <span className="required text-red-600">*</span>
                  <textarea
                    name="message"
                    placeholder="Feel free to include any questions, requests, or details you would like to communicate."
                    className="mt-1 block w-full border border-white bg-white px-3 py-2"
                  ></textarea>
                </label>
              </div>
              <div className="col-span-2 text-center">
            <button
              type="submit"
              className="cursor-pointer bg-blue-950 px-6 py-2 font-bold text-white hover:bg-blue-900 disabled:opacity-50"
            >SEND MESSAGE
            </button>
          </div>
             
            </form>
          </section>
          </section>
          </>
      );
}

export default GetInTouch;