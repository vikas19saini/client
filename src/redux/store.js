import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from "redux-thunk";

let initState = {
    currency: {
        code: "INR",
        id: 4,
        status: 1,
        title: "INR",
        value: 1
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case HYDRATE:
            let nextState = { ...state }
            return nextState
        case 'SET_CURRENCY':
            let nextStateup = { ...state, ...{ currency: action.payload } }
            return nextStateup
        case 'ADD_TO_CART':
            let cartAfterAdd = { ...state, ...{ cartId: action.payload } }
            return cartAfterAdd
        case 'SET_CART_ITEMS':
            let cartAfterRemove = { ...state, ...{ cartItems: action.payload } }
            return cartAfterRemove
        case 'USER_LOGIN':
            let afterLogin = { ...state, ...{ auth: action.payload } }
            return afterLogin;
        case 'SET_ORDER':
            let afterOrder = { ...state, ...{ order: action.payload } };
            return afterOrder;
        case 'SIGN_OUT':
            let afterLogout = { ...state }
            delete afterLogout.auth;
            return afterLogout;
        default:
            return state;
    }
};

const combinedReducer = combineReducers({
    config: reducer
})


// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
    if (isServer) {
        //If it's on server side, create a store
        return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
    } else {
        //If it's on client side, create a store which will persist
        const { persistStore, persistReducer } = require("redux-persist");
        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "gandhiStore",
            whitelist: ["config"], // only counter will be persisted, add other reducers if needed
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

        const store = createStore(
            persistedReducer,
            bindMiddleware([thunkMiddleware])
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);