import { Component, OnInit } from "@angular/core";

import { User } from "../Models/user";
import { AuthService } from "./auth.service";

@Component({
    selector: "ns-register",
    moduleId: module.id,
    templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
    items: User[];
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        
    }
}