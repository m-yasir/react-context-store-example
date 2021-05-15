import { Cart, CartItem } from "../types";
import { produce } from "immer";

// Types

interface UpdatePayload {
	id: number;
}

type UpdateTypes = "addQuantity" | "subtractQuantity" | "deleteProduct";

export type CartAction =
	| { type: UpdateTypes; payload: UpdatePayload }
	| { type: "addProduct"; payload: CartItem }

// Inits
const initalState: Cart = {
	items: [],
	total: 0
};

// Reducer
const reducer = (state = initalState, action: CartAction) =>
	produce(state, (draft) => {
		switch (action.type) {
			case "addProduct":
				draft.items.push(action.payload);
				draft.total += action.payload.price;
				break;
			case "deleteProduct":
				const deleteIdx = draft.items.findIndex(item => item.id === action.payload.id);
				draft.total -= draft.items[deleteIdx].price * draft.items[deleteIdx].quantity;
				draft.items.splice(deleteIdx, 1);
				break;
			case "addQuantity":
				const addIdx = draft.items.findIndex(
					(item) => item.id === action.payload.id
				);
				draft.items[addIdx].quantity++;
				draft.total += draft.items[addIdx].price;
				break;
			case "subtractQuantity":
				const subtractIdx = draft.items.findIndex(
					(item) => item.id === action.payload.id
				);
				draft.items[subtractIdx].quantity--;
				draft.total -= draft.items[subtractIdx].price;
				break;
			default:
				throw new Error("Invalid Update to Cart State");
		}
    });

// Export
export default {
	initalState,
	reducer
};
