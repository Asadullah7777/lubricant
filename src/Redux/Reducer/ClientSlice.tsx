import { createSlice } from "@reduxjs/toolkit";

type formClient = {
  clients: Array<{
    clientName: string;
    number: number;
    address: string | number;
    shopName: string;
    id: number;
  }>;
};

const initialState: formClient = {
  clients: [],
};
export const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {
    saveClient: (state, action) => {
      state.clients = [...state.clients, action.payload];
    },
    updateClient: (state, action) => {
      // console.log("jvjj", action.payload);
      const allClients = [...state.clients];
      // console.log("jvjj", allProducts);
      const newData = allClients?.filter(
        (data: any) => data.id !== action.payload.id
      );
      // console.log("new  ---- ", newData);
      // newData.push(...action.payload);
      state.clients = [...newData, action.payload];
    },
    deleteClients: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client.id !== action.payload
      );
    },
  },
});

export const { saveClient, updateClient, deleteClients } = clientSlice.actions;

export default clientSlice.reducer;
