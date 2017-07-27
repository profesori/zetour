import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 

    ngOnInit(): void {
        firebase.init({
            iOSEmulatorFlush: true,
        }).then(
            (instance) => {
                console.log("firebase.init done");
            },
            (error) => {
                console.log("firebase.init error: " + error);
            }
        );
    }   

}
