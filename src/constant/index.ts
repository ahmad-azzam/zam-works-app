import { TLinkMenu, TListAbout, TStatAbout } from "@/@types/index.type";

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
    name: "class",
    target: "class",
    offset: -80,
  },
  {
    name: "team",
    target: "team",
    offset: 0,
  },
  {
    name: "prices",
    target: "prices",
    offset: -40,
  },
  {
    name: "testimonial",
    target: "testimonial",
    offset: 0,
  },
  {
    name: "blog",
    target: "blog",
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

export { LINK_NAVBAR, LIST_ABOUT, STATS_ABOUT };
