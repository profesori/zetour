import { Component, OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { RouterExtensions } from "nativescript-angular/router";
//import {Page} from "nativescript-angular/page";
import { User } from "../Models/user";
import { AuthService } from "./auth.service";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-login",
    styleUrls : ["./auth/login.component.css"],
    templateUrl: "./auth/login.component.html",
})
export class LoginComponent implements OnInit {
    
    public input :any ;
    public listener: any;

    constructor(private authService: AuthService,private router : RouterExtensions,private page : Page) { 
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
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://BG";
        this.page.backgroundSpanUnderStatusBar=true;
        this.page.statusBarStyle="light";
        firebase.addAuthStateListener(this.listener);

    }
}