import {
  TLinkMenu,
  TListAbout,
  TListProject,
  TStatAbout,
} from "@/@types/index.type";

const LINK_NAVBAR: TLinkMenu[] = [
  {
    name: "home",
    target: "home",
    offset: -100,
  },
  {
    name: "about",
    target: "about",
    offset: -80,
  },
  {
    name: "project",
    target: "project",
    offset: 0,
  },
  {
    name: "contact",
    target: "contact",
    offset: 0,
  },
];

const LIST_ABOUT: TListAbout[] = [
  {
    title: "Software Engineer",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste ipsa dolorem.",
  },
  {
    title: "Frontend Developer",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste ipsa dolorem.",
  },
  {
    title: "Fullstack Developer",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste ipsa dolorem.",
  },
];

const STATS_ABOUT: TStatAbout[] = [
  { number: 19, text: "Text 1" },
  { number: 47, text: "Text 2" },
  { number: 50, text: "Text 3" },
  { number: 86, text: "Text 4" },
];

const LIST_PROJECT: TListProject[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit quisquam natus, magni dicta omnis architecto, facere tempore iure quam et! Velit numquam cupiditate ab.",
    image: "/assets/img/app-2.jpg",
    link: "",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit quisquam natus, magni dicta omnis architecto, facere tempore iure quam et! Velit numquam cupiditate ab.",
    image: "/assets/img/app-2.jpg",
    link: "",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit quisquam natus, magni dicta omnis architecto, facere tempore iure quam et! Velit numquam cupiditate ab.",
    image: "/assets/img/app-2.jpg",
    link: "",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit quisquam natus, magni dicta omnis architecto, facere tempore iure quam et! Velit numquam cupiditate ab.",
    image: "/assets/img/app-2.jpg",
    link: "",
  },
];

export { LINK_NAVBAR, LIST_ABOUT, STATS_ABOUT, LIST_PROJECT };
