// Global Types

export interface RootState {
    cart: Cart;
}

export interface StoreAction<T> {
    type: string;
    payload: T;
}

// Cart Related Types

export interface Cart {
    items: CartItem[];
    total: number;
}

export interface CartItem extends Product {
    quantity: number;
}

// Product Related Types

export interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
}
