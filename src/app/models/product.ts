import { Offer } from './offer';

export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    offers: Offer[];
}