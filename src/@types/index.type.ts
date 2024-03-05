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

export {
  type TLinkMenu,
  type TVariantAnimationParam,
  type TListAbout,
  type TStatAbout,
};
