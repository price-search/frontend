import { Offer } from './offer';

export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    offers: Offer[];
}

export interface RequestWord {
    name: string;
}


export interface RequestProduct{
    productId: number;
}

export interface ResponseProduct{
    shoppingListId: number;
    productId: number;
    product: Product;
}
