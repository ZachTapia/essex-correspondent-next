// "use client"

// import Image from "next/image";
// import image1 from "../../../public/dpa/webinarVideo.svg";
// import { useState, useEffect } from "react";
// import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
// import { DpaFormAccess } from "@/app/actions/DpaFormAccess";

// type FormValues = {
// companyName: string;
// nmls: string;
// name: string;
// email: string;
// };

// // export default function AccessTraining() {
// //   const [submissionStatus, setSubmissionStatus] = useState<
// //     "success" | "error" | null
// //   >(null);

// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { isSubmitting, isSubmitSuccessful, errors },
// //   } = useForm<FormValues>();

// //   const onSubmit: SubmitHandler<FormValues> = async (data) => {
// //     const result = await AccessTraining(
// //       data.companyName,
// //       data.nmls,
// //       data.name,
// //       data.email,
// //     );
// //     console.log(result);

// //     if (result.success === true) {
// //       setSubmissionStatus("success");
// //     } else {
// //       setSubmissionStatus("error");
// //     }

// //     reset();
// //   };

// //   const onError: SubmitErrorHandler<FormValues> = (errors) => {
// //     console.log(errors);
// //   };
// // }



//   // const DpaForm = () => {
//   //   const [isModalOpen, setIsModalOpen] = useState(false);

//   //   useEffect(() => {
//   //       if (isModalOpen) {
//   //         document.body.classList.add("overflow-hidden");
//   //       } else {
//   //         document.body.classList.remove("overflow-hidden");
//   //       }
    
//   //       return () => {
//   //         document.body.classList.remove("overflow-hidden");
//   //       };
//   //     }, [isModalOpen]);
  
//     return (
//       <section className="w-full h-full justify-items-center bg-white mx-auto max-w-screen-lg p-4 max-sm:pt-0">
//         <div className="m-2 p-2 gap-4">
//         <button onClick={() => setIsModalOpen(true)} type="button" className="cursor-pointer">
//           <Image
//             src={image1}
//             width={800}
//             height={100}
//             alt="Essex Mortgage DPA Webinar"
//             className="pt-4"
//           />
//         </button>
//         </div>
//         <p className="text-gray-600 text-center text-lg pb-2">
//           2025 NATIONAL DPA PROGRAM WEBINAR
//         </p>
        
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div className="bg-gray-300 p-12 rounded-lg shadow-md w-full max-w-lg relative">
//               {/* the Close Button */}
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-2 right-2 text-gray-200 hover:text-gray-400 cursor-pointer"
//               >
//                 &times;
//               </button>
  
//               {/* fill out info */}
//               <h3 className="text-xl font-semibold mb-4 text-blue-950 ">
//                 Get Access to our DPA Training Video
//               </h3>
//               <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
//               <div>
//                   <label
//                     htmlFor="companyName"
//                     className="block mb-1 text-sm text-white"
//                   >
//                     Company Name <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                   {...register("companyName", { required: true })}
//                     type="companyName"
//                     id="companyName"
//                     className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="nmls"
//                     className="block mb-1 text-sm text-white"
//                   >
//                     Company NMLS
//                   </label>
//                   <input
//                    {...register("nmls", { required: true })}
//                     type="nmls"
//                     id="nmls"
//                     className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block mb-1 text-sm text-white"
//                   >
//                     First & Last Name <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                   {...register("name", { required: true })}
//                     type="name"
//                     id="name"
//                     className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-1 text-sm text-white"
//                   >
//                     Your Email <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                   {...register("email", { required: true })}
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-900 cursor-pointer"
//                   disabled={isSubmitting || isSubmitSuccessful}
//                 >
//                    {isSubmitting ? "Submitting..." : "Submit"}
//                   Submit
//                 </button>
//                 <div>
//                 {submissionStatus === "success" && (
//               <p className="text-green-600">
//                 Thank you for your submission! We will get back to you as soon
//                 as possible.
//               </p>
//             )}
//             {submissionStatus === "error" && (
//               <p className="text-red-600">
//                 There was an error submitting the form. Please try again.
//               </p>
//             )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </section>
//     );
//   };
  
//   export default DpaForm;