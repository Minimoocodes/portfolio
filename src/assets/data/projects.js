import tasktasktask from "../img/projects/tasktasktask.png";
import netflix from "../img/projects/netflix.png";
import rock_paper_scissors from "../img/projects/rock_paper_scissors.png";
import countries_quiz from "../img/projects/countries_quiz.png";
import baskinrobins from "../img/projects/baskinrobins.png";

const projectList = [
  {
    src: tasktasktask,
    alt: "To-do app image",
    title: "Task task task",
    program: ["PostgreSQL", "Node.js", "JavaScript", "React", "Tailwind"],
    text: "A full-stack to do app",
    subText:
      "This was a group project produced by 5 people within 4 weeks. In this project, I learned how to set up the database and how to connect it to the frontend, while using libraries such as express and pg. The main goal here was to practice RESTful API, HTTP protocol, password hashing, and user authentication. At the end of the project, we had a chance to deploy both the frontend and backend using Vercel, and could practice API documentation through Swagger.",
    siteLink: "https://todo-group3-client.vercel.app/",
    codeLink: "https://github.com/Hyper-Team-3/Todo-Group3",
  },
  {
    src: netflix,
    alt: "Netflix mockup image",
    title: "Netflix mockup",
    program: ["JavaScript", "React", "ReactQuery", "Axios", "Bootstrap"],
    text: "A Netflix mockup using TMDB API",
    subText:
      "It was to practice React routing and ReactQuery's select. I also learnt how to use AXIOS and to save the API key in .env file",
    siteLink: "",
    codeLink: "https://github.com/Minimoocodes/netflix-mockup",
  },
  {
    src: countries_quiz,
    alt: "Flags game image",
    title: "Javascript countries flag game",
    program: ["HTML", "CSS", "JavaScript"],
    text: "A flag guessing game to practice JavaScript and to work in Git and GitHub",
    subText:
      "A game to practice JavaScript. It was created in 3 weeks by 3 people, and we practiced API fetching and also how to work in git and gitHub for the group projects",
    siteLink: "https://dynamic-kitten-a71626.netlify.app/",
    codeLink: "https://github.com/Minimoocodes/HyperIsland--Country-quiz",
  },
  {
    src: baskinrobins,
    alt: "personal memory about baskin robins website mockup image",
    title: "Baskin robins, my 90s core memory",
    program: ["HTML", "CSS"],
    text: "a mobile-first designed website about my personal memories from 90s",
    subText:
      "This project was my very first coding experience. Here, I was introduced to HTML and CSS, and the importance of responsive design. I learned how to start mobile-first and scale up, and how to manage the hamburger menu only with CSS.",
    siteLink: "https://lucky-pudding-1843b1.netlify.app/",
    codeLink: "https://github.com/Minimoocodes/Mins-BR-mobile",
  },
];

export default projectList;
