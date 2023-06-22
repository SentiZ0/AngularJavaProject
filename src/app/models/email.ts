export class Email {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public recipientId: number,
        public sendingDate: Date,
    ){}
}
