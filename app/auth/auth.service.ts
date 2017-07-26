import { Injectable } from "@angular/core";


import { User } from "../Models/user";

@Injectable()
export class AuthService {
    private users = new Array<User>(
        { uid: 1, displayName: "Ter Stegen",email:"",emailVerified:false,isAnonymous:false,phoneNumber:""},
    );

    getItems(): User[] {
        return this.users;
    }

    getItem(id: number): User {
        return this.users.filter(item => item.uid === id)[0];
    }
}
