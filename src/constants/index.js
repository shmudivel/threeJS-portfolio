import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Procurement Manager & Software Solutions Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2015 - Nov 2020",
    points: [
      "Develop and maintain software solutions using React.js and related technologies for procurement and supply management functions",
      "Collaborate with cross-functional teams to ensure high-quality procurement processes and effective supply chain management",
      "Implement responsive design and ensure compatibility with various software systems",
      "Participate in code reviews and provide feedback to other developers",
      "Source equipment, technology, textiles, and other goods from China to support procurement activities",
      "Establish connections with local businesses in Kazakhstan to expand their reach into the Chinese market",
      "Provide legal contracts translation services from Chinese to English and Russian",
      "Support registration of international businesses in China",
    ],
  },
  {
    title: "Administrative technical translator and Web developer",
    company_name: "EC Global Inspection",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Nov 2020",
    points: [
      "Maintaining and updating the company website to ensure optimal performance and user experience.",
      "Ensuring website content, including images, text, and multimedia, is accurate, up-to-date, and engaging.",
      "Implementing responsive design and cross-browser compatibility to ensure the website is accessible to all users.",
      "Collaborating with technical teams to troubleshoot website issues and implement solutions.",
      "Providing technical support for website users and responding to inquiries in a timely manner.",
      "Assisting with the development and maintenance of web applications using relevant technologies to enhance the website's functionality.",
    ],
  },
  {
    title:
      "Administrative assistant-translator & Software Solutions Developer ",
    company_name: "KAZ Minerals",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2020 - Feb 2022",
    points: [
      "Perform technical translation in Russian-English-Chinese in written and verbal form",
      "Prepare and coordinate important technical documents (budget, planning, contract, equipment, etc.)",
      "Automate and optimize translation by creating a technical dictionary (Air-supply shaft system), reducing training time for new translators",
      "Administer and manage internal and external meetings, organize phone calls and interviews, and plan, coordinate, and adjust the agenda for top management",
      "Perform various administrative functions such as receiving and filing documents, arranging discussions, and facilitating negotiations with stakeholders",
      "Assist management with formal tasks such as preparation of presentations, processing of timesheets, and organization of visits",
      "Control the flow of documents sent for approval or review by management, identify necessary documents and responsible persons, and manage responses to/from responsible employees",
      "Manage correspondence and ensure timely delivery",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "The focus of my career has shifted to Web Development, driven by a desire for a more creative work environment and the vast opportunities presented by software development",
      "As a self-taught coding enthusiast, my portfolio includes projects such as a package calculator, technical dictionary for the mining industry, and time zones scheduler",
      "Through attending local meet-up events in the US, I was able to network with some of the most skilled IT specialists in the industry. These experiences helped me stay current with the latest trends and be more involved in the field",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
