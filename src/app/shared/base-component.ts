import { Injector } from "@angular/core";
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
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


	validateFormFields(form: UntypedFormGroup | UntypedFormArray): void {
		Object.keys(form.controls).forEach(field => {
			const control = form.get(field);
			if (control instanceof UntypedFormControl) {
				control.markAsTouched();
				control.updateValueAndValidity(); // Reruns the custom validators if any
			} else if (control instanceof UntypedFormGroup) {
				this.validateFormFields(control);
			} else if (control instanceof UntypedFormArray) {
				Object.keys(control.controls).forEach(index => {
					if (control instanceof UntypedFormControl) {
						control.markAsTouched();
						control.updateValueAndValidity();
					} else {
						this.validateFormFields(control.get(index) as UntypedFormGroup);
					}
				});
			}
		});
	}
}
