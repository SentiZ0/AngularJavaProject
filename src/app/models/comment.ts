export class Comment {
    constructor(
       public id: number,
       public content: string,
       public creationTime: Date,
       public authorId: number,
       public postId: number
    ) {}
}