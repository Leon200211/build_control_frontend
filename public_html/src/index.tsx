// @ts-ignore
import React, {createContext} from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

// @ts-ignore
import App from './App.tsx';
// @ts-ignore
import Store from "./store/store.ts";

interface State {
    store: Store,
}

const store = new Store();

export const Context = createContext<State>({
    store,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>
);

