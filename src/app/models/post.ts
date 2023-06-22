export class Post {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public creationTime: Date,
        public authorId: number,
        public categoryId: number,
        public status: number,
    ){}
}
