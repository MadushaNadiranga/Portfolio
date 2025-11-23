const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "About Me",
    link: "#AboutMe",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Satisfied Companies" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

// constants.js
const techStackIcons = [
// Backend

    {
    name: "C#",
    category: "Backend Development",
    modelPath: "/models/skill-logo/Backend/c.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    category: "Backend Development",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JAVA",
    category: "Backend Development",
    modelPath: "/models/skill-logo/Backend/java.glb",
    scale: 1.4,
    rotation: [0, 0, 0],
  },
  {
    name: ".NET",
    category: "Backend Development",
    imagePath: "/models/skill-logo/Backend/NET.png",
    imageScale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    category: "Backend Development",
    modelPath: "/models/node-transformed.glb",
    scale: 4,
    rotation: [0, -Math.PI / 2, 0],
  },



  // Forntend

    {
    name: "React",
    category: "Frontend Development",
    modelPath: "/models/skill-logo/Frontend/react.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Flutter",
    category: "Frontend Development",
    modelPath: "/models/skill-logo/Frontend/flutter.glb",
    scale: 26,
    rotation: [0, 0, 0],
  },

  {
    name: "HTML",
    category: "Frontend Development",
    imagePath: "/models/skill-logo/Frontend/html.webp",
    imageScale: 0.6,
    rotation: [0, 0, 0],
    position: [0, -0.95, 0],
  },
  {
    name: "CSS",
    category: "Frontend Development",
    modelPath: "/models/skill-logo/Frontend/css.webp",
    imageScale: 0.6,
    rotation: [0, 8, 0],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    modelPath: "/models/skill-logo/Frontend/tailwind.webp",
    imageScale: 0.6,
    rotation: [0, 8, 0],
  },
  // Database
    {
    name: "SQL",
    category: "Databases",
    modelPath: "/models/skill-logo/Database/sql.glb",
    scale: 1.3,
    rotation: [0, 0, 0],
  },
    {
    name: "Firebase",
    category: "Databases",
    imagePath: "/models/skill-logo/Database/firebase.webp",
    imageScale: 0.7,
    rotation: [0, 0, 0],
  },

  {
    name: "Mongo DB",
    category: "Databases",
    imagePath: "/models/skill-logo/Database/mongo.png",
    imageScale: 0.53,
    rotation: [0, 0, 0],
  },

  {
    name: "PostgreSQL",
    category: "Databases",
    imagePath: "/models/skill-logo/Database/PostgreSQL.webp",
    imageScale: 0.5,
    rotation: [0, 0, 0],
  },

  // Version Control & Cloud
  {
    name: "Git",
    category: "Version Control & Cloud",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Git Hub",
    category: "Version Control & Cloud",
    modelPath: "/models/skill-logo/VersionControl /github.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
    {
    name: "Azure DevOps",
    category: "Version Control & Cloud",
    imagePath: "/models/skill-logo/VersionControl /DevOps.jpg",
    imageScale: 0.6,

  },
];


const expCards = [
  {
    review:
      "Madusha brought creativity and technical expertise to the team, significantly improving our frontend and Backend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/amf_logo2.png",
    logoPath: "/images/amf_logo.png",
    title: "Software Developer - Intern",
    date: "April 2025 - October 2025",
    responsibilities: [
      "Modernized legacy ASP.NET applications by re-architecting them into .NET Core Web API and Angular solutions using Clean Architecture, improving scalability and maintainability.",

      "Designed and implemented RESTful APIs to support core business operations and optimize data processing for Angular front-end systems.",

      "Developed and optimized data access layers with Entity Framework Core and Dapper for high-transaction SQL Server databases.",

      "Applied OOP and SOLID principles to ensure modular, testable, and reusable code.",

      "Utilized Azure DevOps for Git version control, CI/CD pipelines, and Agile sprint management.",

      "Assisted in maintaining and enhancing existing .NET Core applications, including writing optimized SQL queries, improving database performance, and implementing new modules.",

      "Collaborated with cross-functional teams, gaining hands-on experience in Agile workflows and team-based software development.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};