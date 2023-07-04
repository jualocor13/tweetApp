import { Product } from './product.model';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(title: string, description: string, price: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<Product[]>;
    findProduct(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(id: string, title: string, description: string, price: number): Promise<void>;
    deleteProduct(id: string): Promise<void>;
    uploadFile(file: any): Promise<any[]>;
}
