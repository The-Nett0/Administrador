export class usuario{


    // el orden tiene importacia
    constructor(
        public nombre_u: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string

    ){

    }

}