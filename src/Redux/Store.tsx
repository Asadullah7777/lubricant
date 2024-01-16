import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Reducer/UserSlice";
import productReducer from "../Redux/Reducer/ProductSlice";
import clientReducer from "../Redux/Reducer/ClientSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistUserConfig = {
  key: "user",
  storage,
};
const persistProductConfig = {
  key: "product",
  storage,
};
const persistClientConfig = {
  key: "client",
  storage,
};
const persistedClientReducer = persistReducer(
  persistClientConfig,
  clientReducer
);
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
const persistedProductReducer = persistReducer(
  persistProductConfig,
  productReducer
);
export const Store = configureStore({
  reducer: {
    auth: persistedUserReducer,
    product: persistedProductReducer,
    client: persistedClientReducer,
  },
});
export const persistor = persistStore(Store);
