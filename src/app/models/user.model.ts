export interface IUserDAO {

    name?: string;
    email?: string;
    username?: string;
    password?: string;

}

export class UserDAO implements IUserDAO {
    constructor(

        public name?: string,
        public email?: string,
        public username?: string,
        public password?: string
    ) {


    }


}