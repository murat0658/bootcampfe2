import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meyveler: [
    {
      id: 0,
      backColor: "white",
      src: "./src/assets/apple.png",
      width: "20px",
      height: 30,
      isim: "Elma",
      cizili: true,
      gizli: false,
    },
    {
      id: 1,
      backColor: "green",
      src: "./src/assets/pear.png",
      width: "20px",
      height: 30,
      isim: "Armut",
      cizili: false,
      gizli: false,
    },
    {
      id: 2,
      backColor: "red",
      src: "./src/assets/banana.png",
      width: "20px",
      height: 30,
      isim: "Muz",
      cizili: false,
      gizli: false,
    },
    {
      id: 3,
      backColor: "magenta",
      src: "./src/assets/cherries.png",
      width: "20px",
      height: 30,
      isim: "Kiraz",
      cizili: false,
      gizli: false,
    },
  ],
};

const meyvelerSlice = createSlice({
  name: "meyve",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(JSON.stringify(action.payload));
      state.meyveler.push(action.payload);
    },
    delet: (state, action) => {
      state.meyveler = state.meyveler.filter(
        (meyve) => action.payload !== meyve.id
      );
    },
    edit: (state, action) => {
      state.meyveler = state.meyveler.map((meyve) => {
        if (meyve.id == action.payload?.id) {
          return { ...meyve, isim: action.payload.yeniMeyve };
        }
        return meyve;
      });
    },
  },
});

export const meyvelerReducer = meyvelerSlice.reducer;
export const { add, delet, edit } = meyvelerSlice.actions;
export const selector = (state) => state.meyveler;
