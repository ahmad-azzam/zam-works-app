type TLinkMenu = {
  name: string;
  target: string;
  offset: number;
};

type TVariantAnimationParam = {
  direction: "up" | "down" | "left" | "right";
  delay: number;
};

export { type TLinkMenu, type TVariantAnimationParam };
