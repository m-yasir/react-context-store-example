import { CartItem } from "../types";
import { produce } from "immer";

// Types
interface UpdatePayload {
	id: number;
}

type UpdateTypes = "addQuantity" | "subtractQuantity" | "deleteProduct";

type Action = { type: UpdateTypes; payload: UpdatePayload } | {};

// Inits
const initalState: CartItem[] = [];

// Reducer
const reducer = (state, action) => produce(state, (draft) => {});

// Export
export default {
	initalState,
	reducer
};
