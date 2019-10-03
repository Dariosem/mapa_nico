import { PointGometry } from './pointGeometry';

export class Loteo{
    constructor(
        public _id: string,
        public type: string,
        public properties: Object,
        public geometry: PointGometry
    ){}

}