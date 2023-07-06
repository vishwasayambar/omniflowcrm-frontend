import { Component, Host, Injector, Input, OnInit, Optional, SkipSelf } from "@angular/core";
import { AbstractControl, ControlContainer, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseComponent } from "../../base-component";

@Component({
  selector: "app-control-container",
  templateUrl: "./control-container.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControlContainerComponent,
      multi: true,
    },
  ],
})
export class ControlContainerComponent extends BaseComponent implements OnInit {
  control: AbstractControl | undefined;
  @Input()
  name: string | undefined;
  @Input()
  label: string;
  @Input()
  errorMsg = "An error occurred";
  @Input()
  tooltipText;
  @Input()
  isReadOnly = false;
  @Input()
  isLabelOnSameLine = false;
  required = false;

  constructor(
      @Optional()
      @Host()
      @SkipSelf()
      private controlContainer: ControlContainer,
      injector: Injector,
  ) {
    super(injector);
  }

  get status() {
    if (this.control && this.control.validator) {
      const validator = this.control.validator({} as AbstractControl);

      return validator && validator["required"];
    }
  }

  ngOnInit() {
    if (this.controlContainer) {
      if (this.name) {
        this.control = this.controlContainer.control.get(this.name);
        if (this.control.validator) {
          const validator = this.control.validator({} as AbstractControl);
          if (validator && validator["required"]) {
            this.required = true;
          }
        }
      } else {
        console.warn("Missing FormControlName directive from host element of the component");
      }
    } else {
      console.warn("Cant find parent FormGroup directive");
    }
  }
}
