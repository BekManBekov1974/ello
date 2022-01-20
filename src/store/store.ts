import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer, rootSaga } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMidlleWare = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMidlleWare))
);
export const persistor = persistStore(store);
sagaMidlleWare.run(rootSaga);
