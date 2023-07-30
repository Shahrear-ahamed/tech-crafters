const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pcComponents: {
    processor: null,
    motherboard: null,
    ram: null,
    powerSupplyUnit: null,
    storageDevice: null,
    monitor: null,
    keyboard: null,
    mouse: null,
    gpu: null,
  },
  price: 0,
  items: 0,
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { componentName, data } = action.payload;
      state.pcComponents[componentName] = data;
      state.price += data.price;
      state.items += 1;
    },
    removeComponent: (state, action) => {
      const { componentName } = action.payload;

      state.price -= state.pcComponents[componentName].price;
      state.pcComponents[componentName] = null;
      state.items -= 1;
    },
  },
});

export const { addComponent, removeComponent } = componentSlice.actions;

export default componentSlice.reducer;
