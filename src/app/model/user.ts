export class User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    description: string;

    constructor(){
        this.id=0;
        this.email='';
        this.first_name='';
        this.last_name='';
        this.avatar='';
        this.description='';
    }
}
