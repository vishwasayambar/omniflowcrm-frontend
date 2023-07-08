import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";


@NgModule({
	declarations: [
		AuthComponent,
		SignupComponent,
		LoginComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		SharedModule,
	]
})
export class AuthModule {
}
