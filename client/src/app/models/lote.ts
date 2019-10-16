export class Lote{
    constructor(
        public _id: string,
        public type: string,
        public properties: {
            name: string,
            fill: string,
            status:string
        },
        public geometry: Object,
        public loteo_id: string
    ){}
}