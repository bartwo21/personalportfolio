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
  barmen,
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
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Motion Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Freelance Motion Designer",
    company_name: "Freelance",
    icon: creator,
    iconBg: "#383E56",
    date: "March 2016 - April 2018",
    points: [
      "Proficient in industry-standard motion design software such as Adobe After Effects, Cinema 4D, and Adobe Premiere Pro.",
      "Extensive experience in creating animations, visual effects, and other motion graphics for a variety of mediums including television, film, advertising, and digital media.",
      "Skilled in developing and executing creative concepts and ideas to meet the needs of clients and projects.",
      "Passionate about staying up-to-date with industry trends and advancements in technology, and continuously improving skills and knowledge in motion design.",
    ],
  },
  {
    title: "Barmen",
    company_name: "Cullinan Belek",
    icon: barmen,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Proficient in preparing and serving alcoholic beverages.",
      "Knowledgeable about the bar and the drinks available, including their ingredients.",
      "Friendly and welcoming towards guests, ensuring they have a good experience.",
      "Patient and energetic, able to handle a fast-paced work environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Hangman game",
    description: "Simple hangman game made with javascript.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/bartwo21/hangmanGame",
  },
  {
    name: "Gym registration form",
    description:
      "Submitting registration form using php and displaying submitted registration.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/bartwo21/gym-registration-form",
  },
  {
    name: "Github profile finder",
    description:
      "Simple github profile finder made with javascript and github api.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/bartwo21/github-profile-finder",
  },
];

export { services, technologies, experiences, testimonials, projects };
