import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    insert(title: string, description: string, price: number): Promise<string>;
    getAll(): Promise<Product[]>;
    find(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    update(id: string, title: string, description: string, price: number): Promise<void>;
    delete(id: string): Promise<void>;
    getProduct(id: string): Promise<Product>;
}
