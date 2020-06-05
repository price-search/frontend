import { Product } from './product';

export interface ShoppingList {
    id: number;
    name: string;
    products: Product[];
}

export interface RequestLista{
    name: string;
    user: User;
}

export interface User{
    id: string;
}

export interface ResponseLista{
    id: string;
        name: string;
        products: Product[];
        user: User;
}
