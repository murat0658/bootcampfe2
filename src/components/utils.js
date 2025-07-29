const meyveler = [
  {
    src: "./src/assets/apple.png",
    width: "20px",
    height: 20,
    isim: "Elma",
    cizili: true,
    gizli: false,
  },
  {
    src: "./src/assets/pear.png",
    width: "20px",
    height: 20,
    isim: "Armut",
    cizili: true,
    gizli: false,
  },
  {
    src: "./src/assets/cherries.png",
    width: "20px",
    height: 20,
    isim: "Kiraz",
    cizili: false,
    gizli: false,
  },
  {
    src: "./src/assets/banana.png",
    width: "20px",
    height: 20,
    isim: "Muz",
    cizili: false,
    gizli: true,
  },
  {
    src: "./src/assets/watermelon.png",
    width: "20px",
    height: 30,
    isim: "Karpuz",
    cizili: false,
    gizli: false,
  },
];

export const selectMeyve = (meyveIsmi) => {
  if (meyveler.some((meyve) => meyve.isim === meyveIsmi))
    return meyveler.filter((meyve) => meyve.isim === meyveIsmi)[0];
};

export const createNewID = (arr) => {
  if (!arr || arr.length === 0) return 0;
  return Math.max(...arr.map((item) => item.id)) + 1;
};
