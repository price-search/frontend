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
    id: string;
}

export interface ResponseProduct{
    id: string;
}
