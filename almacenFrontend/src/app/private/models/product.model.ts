export class Product {
    constructor(
        public id: number, 
        public name: string, 
        public price: number, 
        public date: string,
        public address: string,
        public location: string
        ) { }
}