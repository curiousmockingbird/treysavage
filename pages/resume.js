// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Cursor from "../components/Cursor";
// import Header from "../components/Header";
// import ProjectResume from "../components/ProjectResume";
// import Socials from "../components/Socials";
// import Button from "../components/Button";
// import { useTheme } from "next-themes";

// const Resume = () => {
//   const router = useRouter();
//   const theme = useTheme();
//   const [mount, setMount] = useState(false);

//   useEffect(() => {
//     setMount(true);
//     if (!data.showResume) {
//       router.push("/");
//     }
//   }, []);
//   return (
//     <>
//       {/* {process.env.NODE_ENV === "development" && (
//         <div className="fixed bottom-6 right-6">
//           <Button onClick={() => router.push("/edit")} type={"primary"}>
//             Edit Resume
//           </Button>
//         </div>
//       )} */}
//       {data.showCursor && <Cursor />}
//       <div
//         className={`container mx-auto mb-10 ${
//           data.showCursor && "cursor-none"
//         }`}
//       >
//         <Header isBlog />
//         {mount && (
//           <div className="mt-10 w-full flex flex-col items-center">
//             <div
//               className={`w-full ${
//                 mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
//               } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
//             >
//               <h1 className="text-3xl font-bold">{data.name}</h1>
//               <h2 className="text-xl mt-5">{data.resume.tagline}</h2>
//               <h2 className="w-4/5 text-xl mt-5 opacity-50">
//                 {data.resume.description}
//               </h2>
//               <div className="mt-2">
//                 <Socials />
//               </div>
//               <div className="mt-5">
//                 <h1 className="text-2xl font-bold">Experience</h1>

//                 {data.resume.experiences.map(
//                   ({ id, dates, type, position, bullets }) => (
//                     <ProjectResume
//                       key={id}
//                       dates={dates}
//                       type={type}
//                       position={position}
//                       bullets={bullets}
//                     ></ProjectResume>
//                   )
//                 )}
//               </div>
//               <div className="mt-5">
//                 <h1 className="text-2xl font-bold">Education</h1>
//                 <div className="mt-2">
//                   <h2 className="text-lg">{data.resume.education.universityName}</h2>
//                   <h3 className="text-sm opacity-75">
//                     {data.resume.education.universityDate}
//                   </h3>
//                   <p className="text-sm mt-2 opacity-50">
//                     {data.resume.education.universityPara}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <h1 className="text-2xl font-bold">Skills</h1>
//                 <div className="flex mob:flex-col desktop:flex-row justify-between">
//                   {data.resume.languages && (
//                     <div className="mt-2 mob:mt-5">
//                       <h2 className="text-lg">Languages</h2>
//                       <ul className="list-disc">
//                         {data.resume.languages.map((language, index) => (
//                           <li key={index} className="ml-5 py-2">
//                             {language}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {data.resume.frameworks && (
//                     <div className="mt-2 mob:mt-5">
//                       <h2 className="text-lg">Frameworks</h2>
//                       <ul className="list-disc">
//                         {data.resume.frameworks.map((framework, index) => (
//                           <li key={index} className="ml-5 py-2">
//                             {framework}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {data.resume.others && (
//                     <div className="mt-2 mob:mt-5">
//                       <h2 className="text-lg">Others</h2>
//                       <ul className="list-disc">
//                         {data.resume.others.map((other, index) => (
//                           <li key={index} className="ml-5 py-2">
//                             {other}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Resume;

import React from 'react';
import resumeData from "../data/resume.json";

// Sample resume data, replace this with your actual JSON object


const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{resumeData.name}</h1>
      <p>{resumeData.location}</p>
      <p>{resumeData.email}</p>
      <div>
      <div>
        <h2 className="text-2xl font-bold mt-5">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-bold">{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.dates}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-5">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-bold">{exp.title} - {exp.program}</h3>
            <p>{exp.location}</p>
            <p>{exp.dates}</p>
            <ul className="list-disc ml-5">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-5">Honors and Activities</h2>
        <ul className="list-disc ml-5">
          {resumeData.honors_and_activities.map((honor, index) => (
            <li key={index}>{honor}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-5">Skills</h2>
        <h3 className="font-bold mt-2">Languages</h3>
        <p>{resumeData.skills.languages}</p>
        <h3 className="font-bold mt-2">Technology and Art</h3>
        <ul className="list-disc ml-5">
          {resumeData.skills.technology_and_art.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h3 className="font-bold mt-2">Professionalism</h3>
        <ul className="list-disc ml-5">
          {resumeData.skills.professionalism.map((trait, index) => (
            <li key={index}>{trait}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ResumePage;

