import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDevExtremeModule } from "./dev-extreme.module";

const COMMON_MODULE_LIST = [

]

@NgModule({
  declarations: [
    // COMMON_MODULE_LIST,

  ],
  imports: [
    CommonModule,
    SharedDevExtremeModule,
  ],
  exports:[
    // COMMON_MODULE_LIST,
    SharedDevExtremeModule,
  ]
})
export class SharedModule { }
