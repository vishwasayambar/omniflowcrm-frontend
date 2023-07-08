import { Component, Injector, OnInit } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { BaseComponent } from "../../../shared/base-component";
import { SignUp } from "../../../shared/models/sign-up";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"]
})
export class SignupComponent extends BaseComponent implements OnInit {
	form: UntypedFormGroup;

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit(): void {
		this.form = SignUp.getForm(new SignUp({}))
	}

	saveForm(){
		if(this.form.valid){


		}else{
			this.validateFormFields(this.form)
		}

	}
}
