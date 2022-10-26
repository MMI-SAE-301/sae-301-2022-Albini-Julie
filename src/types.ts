export interface Montre {
  bracelet?: string;
  boitier?: string;
  ecran?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FC3737": "Rouge",
  "#EC8321": "Orange",
  "#42FF99": "Vert",
  "#57BDF6": "Bleu",
  "#FBEF84": "Jaune",
  "#FFADF7": "Rose",
  "#C3C3C3": "Gris",
  "#745C5C": "Marron",
  "#A82DF3": "violet",
};

export const materiaux = [
  {
    value: "/cuir.jpg",
    label: "Cuir",
  },
  {
    value: "/tissu.jpg",
    label: "Tissu",
  },
  {
    value: "/métal.webp",
    label: "métal",
  },
];