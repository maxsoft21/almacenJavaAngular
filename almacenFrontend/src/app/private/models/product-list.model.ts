import { Product } from "./product.model";

export class ProductList {
    constructor(
        public data: Product[], 
        public totalElements: string,
        public totalPages:string,
        public size:string
        ) { }
}