import { Injector } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

export abstract class BaseComponent{
	router:Router;
	activatedRouter: ActivatedRoute;
	authService: AuthService;
	protected constructor(injector: Injector){
		this.router = injector.get(Router);
		this.activatedRouter = injector.get(ActivatedRoute);
		this.authService = injector.get(AuthService);
    }
}
