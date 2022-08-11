export class Product {
    constructor(
        public id: number,
        public description: string,
        public originalPrice: string,
        public discountedPrice: string,
        public stock: string) { }
}