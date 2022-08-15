export class ProductRequest {
    constructor(
        public name: string, 
        public price: number, 
        public date: string,
        public address: string,
        public location: string
        ) { }
}