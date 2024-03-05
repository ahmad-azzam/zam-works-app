type TLinkMenu = {
  name: string;
  target: string;
  offset: number;
};

type TListAbout = {
  title: string;
  subTitle: string;
};

type TStatAbout = {
  number: number;
  text: string;
};

type TVariantAnimationParam = {
  direction: "up" | "down" | "left" | "right";
  delay: number;
};

type TListProject = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export {
  type TLinkMenu,
  type TVariantAnimationParam,
  type TListAbout,
  type TStatAbout,
  type TListProject,
};
