import storageImport from "redux-persist/lib/storage";

const storage = (storageImport as any).default ?? storageImport;

export const persistConfig = {
  key: "root",
  storage,
   //blacklist: ["theme"],
   //whitelist: ["auth"],
};
