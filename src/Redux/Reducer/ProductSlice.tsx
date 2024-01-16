import { createSlice } from "@reduxjs/toolkit";

type FormState = {
  products: Array<{
    product: string;
    category: string;
    quantity: number;
    company: string;
    discount: string;
    discountprice: number | string;
    cartonprice: number;
    unitprice: number;
    id: number;
  }>;
};
const initialState: FormState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    update: (state, action) => {
      // console.log("jvjj", action.payload);
      const allProducts = [...state.products];
      // console.log("jvjj", allProducts);
      const newData = allProducts?.filter(
        (data: any) => data.id !== action.payload.id
      );
      // console.log("new  ---- ", newData);
      // newData.push(...action.payload);
      state.products = [...newData, action.payload];
    },
    deleted: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { create, update, deleted } = productSlice.actions;
export default productSlice.reducer;
