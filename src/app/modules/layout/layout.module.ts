import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }
