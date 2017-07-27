import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";
import { MainComponent } from "./main/main.component";


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: LoginComponent },
    { path: "main", component: MainComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }