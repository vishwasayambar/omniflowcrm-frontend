import { Component, Injector } from "@angular/core";
import { BaseComponent } from "./shared/base-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent{
  title = 'OmniFlowCRM';

  constructor(injector: Injector) {
    super(injector);
  }
}
