import { Component, OnInit } from "@angular/core";

import { User } from "../Models/user";
import { AuthService } from "./auth.service";

@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    items: User[];
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        
    }
}