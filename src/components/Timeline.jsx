const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const defaultTimelineData = [
  {
    title: "Teaching assistant - Fullstack",
    organization: "NTNU",
    date: "2025 january - june",
    points: [
      "Teaching students how to build fullstack applications using React, Node.js, Express, and MongoDB",
    ],
  },
  {
    title: "Teaching assistant - Web Project",
    organization: "NTNU",
    date: "2025 january - june",
    points: [
      "Helping students students practice and further improve their technical skills in Web development",
    ],
  },
  {
    title: "Internship - Frontend Web Developer",
    organization: "Inmeta/Crayon consulting",
    date: "2024 august - november",
    points: [
      "Working on a project, developing an Optimizley CMS plugin using React, TypeScript, Shadcn, and Optimizley",
    ],
  },
  {
    title: "Teaching assistant - Web Coding",
    organization: "NTNU",
    date: "2023 august - december",
    points: ["Teaching first year students HTML/CSS"],
  },
];

export default function Timeline({ timelineData = defaultTimelineData }) {
  return (
    <div className='max-w-3xl mx-auto py-14 px-4'>
      {/* <h2 className='text-2xl font-bold mb-8 text-center'>Experience</h2> */}

      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-white'></div>

        {/* Timeline items */}
        <div className='space-y-12'>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col md:flex-row md:items-center",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Timeline dot */}
              <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-background z-10'></div>

              {/* Content card */}
              <div
                className={cn(
                  "ml-6 md:ml-0 md:w-[calc(50%-2rem)] p-4  rounded-lg shadow-md border border-gray-200",
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                )}
              >
                <div className='mb-2'>
                  <h3 className='font-bold text-lg'>{item.title}</h3>
                  {item.organization && (
                    <p className='text-muted-foreground'>{item.organization}</p>
                  )}
                </div>

                <div className='text-sm font-medium text-muted-foreground mb-2'>
                  {item.date}
                </div>

                <ul className='list-disc pl-5 space-y-1 text-sm mt-3'>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
