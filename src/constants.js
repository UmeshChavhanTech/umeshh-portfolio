// Skills Section Logo's
import angularLogo from './assets/tech_logo/angular.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postmanLogo from './assets/tech_logo/postman.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import sassLogo from './assets/tech_logo/sass.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import baskethunt from './assets/company_logo/baskethunt.jpeg';
import celebal from './assets/company_logo/celebal.png';
import Kodefactor from './assets/company_logo/kodefactor.png';

// Education Section Logo's
import adypuLogo from '../src/assets/education_logo/adypu.jpeg';
import dhariwalLogo from '../src/assets/education_logo/dhariwal.jpeg';
import imrLogo from '../src/assets/education_logo/imr.png';
import lalwaniLogo from '../src/assets/education_logo/lalwani.png';


// Project Section Logo's
import calenderLogo from './assets/work_logo/calender.png';
import chefLogo from './assets/work_logo/chef.png';
import creatorsLogo from './assets/work_logo/creator.png';
import dashboardLogo from './assets/work_logo/dashboard.png';
import imageLogo from './assets/work_logo/image.png';
import weatherLogo from './assets/work_logo/weather.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      //{ name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: Kodefactor,
      role: "Fullstack Developer",
      company: "Kodefactor Consulting Pvt Ltd",
      date: "March 2025 - Jun 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        //"Redux",
        " Nest Js",
      ],
    },
    {
      id: 1,
      img: celebal,
      role: "React Js Developer Intern",
      company: "Celebal Technology",
      date: "Jun 2024 - August 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: baskethunt,
      role: "Web Developer Intern",
      company: "Baskethunt Pvt Ltd",
      date: "August 2023 - Octomber 2023 ",
      desc: "Worked as a Web Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: adypuLogo,
      school: "ADYPU University, Pune",
      date: "July 2023 - Jun 2025",
      grade: "8.51 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Ajeenkya DY Patil University, Pune. During my time at ADYPU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at ADYPU University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: imrLogo,
      school: "IMR College, Jalgaon",
      date: "July 2019 - Jun 2022",
      grade: "9.2 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (BCA) from IMR College, Jalgaon. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor Of Computer Application - BCA",
    },
    {
      id: 2,
      img: dhariwalLogo,
      school: "Manoharsheth Dhariwal College, Jamner",
      date: "July 2017 - Jun 2019",
      grade: "73%",
      desc: "I completed my class 12 education from Manoharsheth Dhariwal College, Jamner, under the Maharashtra State board, where I studied Account, SP, and OCM .",
      degree: "Maharashtra State Board(XII) ",
    },
    {
      id: 3,
      img: lalwaniLogo,
      school: "Indirabai Lalwani Primary School, Jamner",
      date: "July 2016 - Jun 2017",
      grade: "75%",
      desc: "I completed my class 10 education from Indirabai Lalwani School, Jamner, under the Maharashtra State Board board, where I studied Science with Computer.",
      degree: "Maharashtra State Board(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Full Mern Stack Dashboard",
      description:
        "A full-featured MERN stack dashboard application built with user roles, JWT authentication, and enhanced security. After signup, users verify their identity using a 6-digit code. The dashboard includes secure API integration, real-time data handling, and role-based access control, offering an efficient and scalable admin experience. Ideal for modern web platforms requiring secure user management and dynamic interfaces.",
      image: dashboardLogo,
      tags: ["React JS", "Tailwind", "Mongodb", "Nodejs", "API"],
      github: "https://github.com/UmeshChavhanTech/Dashboard",
      //webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Creator Platform",
      description:
        "A full-stack creator platform designed for content creators to generate AI-powered Instagram content ideas and analyze performance metrics. The platform offers comprehensive content suggestions including reels, captions, and hashtags, along with detailed analytics to track engagement and optimize posting strategies, helping creators grow their audience effectively.",
      image: creatorsLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/UmeshChavhanTech/creator-platform",
      webapp: "https://creator-1-8c7x.onrender.com/",
    },
    {
      id: 2,
      title: "Calendar App",
      description:
        "A full-stack event management calendar built with React, Node.js, Express.js, and Tailwind CSS. Displays daily events like meetings with real-time updates. Clicking on a date opens a popup showing all scheduled events for that day, enabling easy tracking and planning.",
      image: calenderLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/UmeshChavhanTech/calendar-app.git",
      webapp: "https://umeshchavhantech.github.io/calendar-app/",
    },
    {
      id: 3,
      title: "Chef Receipe Guide",
      description:
        "Chef Recipe Guide is a simple and user-friendly web app built with HTML, CSS, and JavaScript. Users can search for recipes, view detailed ingredient lists, and easily share their favorite dishes via WhatsApp. Perfect for food lovers looking for quick cooking inspiration.",
      image: chefLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/UmeshChavhanTech/Chef-Recipe-Guide.git",
      webapp: "https://umeshchavhantech.github.io/Chef-Recipe-Guide/",
    },
    {
      id: 4,
      title: "Weather App ",
      description:
        " A real-time weather application built with HTML, CSS, and JavaScript. Fetches live weather data using a public weather API and displays temperature, conditions, and location-specific information with a clean, responsive UI.",
      image: weatherLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/UmeshChavhanTech/Weather-Application.git",
      webapp: "https://umeshchavhantech.github.io/Weather-Application/",
    },
    {
      id: 5,
      title: "Image Preview",
      description:
        "Image Preview App is a lightweight project built with HTML, CSS, and JavaScript that allows users to upload an image and instantly preview it on the screen. It offers a clean interface for quick and easy image viewing before submission.",
      image: imageLogo,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/UmeshChavhanTech/ImagePreview.git",
      webapp: "https://imagepreviewproject.netlify.app/",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  