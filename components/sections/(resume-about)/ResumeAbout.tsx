// "use client";

// import { useState } from "react";
// import Resume from "../(resume-about)/Resume";
// import AboutMeSection from "./AboutMeSectionSSR";

// const ResumeAbout = () => {
//   const [displayedComponent, setDisplayedComponent] = useState(1);

//   const handleButtonClick = (component: number) => {
//     setDisplayedComponent(component);
//   };

//   return (
//     <div className="mt-10 w-full lg:max-w-7xl mx-auto">
//       <header className="flex flex-row justify-center space-x-10 lg:space-x-24">
//         <button
//           onClick={() => handleButtonClick(1)}
//           className={`text-4xl text-center font-serif py-4 border-b-2 border-light ${
//             displayedComponent === 1
//               ? "text-yellow border-yellow"
//               : "text-light border-light"
//           }`}
//         >
//           Option 1
//         </button>
//         <button
//           onClick={() => handleButtonClick(2)}
//           className={`text-4xl text-center font-serif py-4 border-b-2 border-light ${
//             displayedComponent === 2
//               ? "text-yellow border-yellow"
//               : "text-light border-light"
//           } `}
//         >
//           Option 2
//         </button>
//       </header>
//       <main>{displayedComponent === 1 ? <Resume /> : <AboutMeSection />}</main>
//     </div>
//   );
// };

// export default ResumeAbout;
