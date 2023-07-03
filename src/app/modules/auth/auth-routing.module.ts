import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        title: "Authentication Component",
        children:   [
            {
                path: 'signUp',
                component: SignupComponent,
                title: "OmniFlowCRM signUp Page"
            },
            {
                path: 'login',
                component: LoginComponent,
                title: "OmniFlowCRM Login Page"
            },
            {
                path: '',
                redirectTo: "/auth/login",
                pathMatch: "full",
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
