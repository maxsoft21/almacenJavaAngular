import { Sort } from "./sort.module";

export class ReponsePaginable<T> {
    constructor(
        public content: T[],
        public pageable: string,
        public last: boolean,
        public totalPages: number,
        public totalElements: number,
        public size: number,
        public number: number,
        public sort: Sort,
        public first: boolean,
        public numberOfElements: number,
        public empty: boolean
        ) { }
}