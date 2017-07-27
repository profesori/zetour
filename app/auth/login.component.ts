import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../Models/user";
import { AuthService } from "./auth.service";

@Component({
    selector: "ns-login",
    templateUrl: "./auth/login.component.html",
})
export class LoginComponent implements OnInit {
    
    public input :any ;
    public listener: any;

    constructor(private authService: AuthService,private router : RouterExtensions) { 
        this.input = {
            "email" : "",
            "password" : ""
        }
         this.listener = {
            onAuthStateChanged: function(data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    this.router.navigate(["/main"], { clearHistory: true });
                }else{
                    this.router.navigate(["/login"], { clearHistory: true });
                }
            },
            thisArg: this
        };
    }

    ngOnInit(): void {
        firebase.addAuthStateListener(this.listener);
    }
}