import * as React from "react";
import AppContextProvider, { useStore } from "../../context";

// TODO: Remove once other user components are created.
const TEST_PROD = { id: 1, name: "testProduct", price: 5, quantity: 1 };

function TestComponent() {
	const { state, dispatch } = useStore();

	const handleAddProduct = () => {
		if (state.cart.items.find((item) => item.id === TEST_PROD.id)) {
			dispatch.cartDispatch({
				type: "addQuantity",
				payload: { id: TEST_PROD.id }
			});
		} else {
			dispatch.cartDispatch({
				type: "addProduct",
				payload: TEST_PROD
			});
		}
	};

	const handleSubtractProduct = () => {
		dispatch.cartDispatch({
			type: "subtractQuantity",
			payload: { id: TEST_PROD.id }
		});
	};

	return (
		<div>
			<h4>
				Hello World! Welcome to React App Context Store Demonstration!
			</h4>
			<div>
				<button
					disabled={
						!(
							state.cart.items[0] &&
							state.cart.items[0].quantity > 1
						)
					}
					onClick={handleSubtractProduct}
				>
					Reduce Product
				</button>
				<button onClick={handleAddProduct}>Add Product</button>
			</div>
		</div>
	);
}

function App() {
	return (
		<AppContextProvider>
			<TestComponent />
		</AppContextProvider>
	);
}

export default App;
