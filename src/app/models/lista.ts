import { Product } from './product';

export interface ShoppingList {
    id: number;
    name: string;
    listProducts: ListProducts[];
}

export interface ListProducts{
    shoppingListId: number;
    productId: number;
    product: Product;

}

export interface RequestLista{
    name: string;
}

export interface User{
    id: string;
}

export interface ResponseLista{
    id: string;
    name: string;
    listProducts: Product[];
    user: User;
}
