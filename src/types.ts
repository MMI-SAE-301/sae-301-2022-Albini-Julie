export interface Montre {
  bracelet?: string;
  boitier?: string;
  ecran?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
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
    value: "/synthétique.jpg",
    label: "Synthétique",
  },
];