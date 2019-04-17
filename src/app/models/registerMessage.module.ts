export interface IRegisterMessage {
    usernameState?: boolean;
    emailState?: boolean;
    successfull?: boolean;
}

export class RegisterMessage implements IRegisterMessage{
    constructor(
        public usernameState?: boolean,
        public emailState?: boolean,
        public successfull?: boolean
        ) {

    }
}