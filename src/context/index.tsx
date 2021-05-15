import React, { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import cart, { CartAction } from "../reducers/cart";
import { RootState } from "../types";

interface AppContextValue {
	state: RootState;
	dispatch?: {
		cartDispatch: Dispatch<CartAction>
	}
}

export type Store =  Required<AppContextValue>;

const storeInitialState: RootState = {
	cart: cart.initalState
};

const initialValue: AppContextValue = {
	state: storeInitialState
};

const AppContext = createContext(initialValue);

export const useStore = () => useContext(AppContext);

interface ProviderProps {
	children: JSX.Element | JSX.Element[];
}

function AppContextProvider({ children }: ProviderProps) {
	const [cartState, cartDispatch] = useReducer(
		cart.reducer,
		cart.initalState
	);
	
	useEffect(() => {
		console.log("CART STATE:", cartState);
	}, [cartState]);

	return (
		<AppContext.Provider
			value={{
				state: {
					cart: cartState
				},
				dispatch: {
					cartDispatch
				}
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppContextProvider;
