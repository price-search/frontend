import { ShoppingList } from './lista';

export interface User {
    id: string;
    shoppingLists: ShoppingList[];
}

export interface RequestUser{
    id: string;
}

export interface ResponseUser {
    id: string;
}
