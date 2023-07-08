import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedDevExtremeModule } from "./dev-extreme.module";
import { ControlContainerComponent } from "./components/control-container/control-container.component";
import { ErrorComponent } from './components/error/error.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

const COMMON_MODULE_LIST = [
	ControlContainerComponent,
	ErrorComponent,
	TooltipComponent,
];

@NgModule({
	declarations: [
		COMMON_MODULE_LIST,
	],
	imports: [
		CommonModule,
		SharedDevExtremeModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		COMMON_MODULE_LIST,
		SharedDevExtremeModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class SharedModule {
}
