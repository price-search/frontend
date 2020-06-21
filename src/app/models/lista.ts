import { Product } from './product';

export interface ShoppingList {
    id: number;
    name: string;
    listProducts: ListProducts[];
}


export interface Product2{
    id: number;
    name: string;
    imageUrl: string;
}

export interface ListProducts{
    shoppingListId: number;
    productId: number;
    product: Product2[];

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
