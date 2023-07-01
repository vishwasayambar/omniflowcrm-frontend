import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DxAccordionModule } from "devextreme-angular/ui/accordion";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { DxChartModule } from "devextreme-angular/ui/chart";
import { DxCheckBoxModule } from "devextreme-angular/ui/check-box";
import { DxColorBoxModule } from "devextreme-angular/ui/color-box";
import { DxContextMenuModule } from "devextreme-angular/ui/context-menu";
import { DxDataGridModule } from "devextreme-angular/ui/data-grid";
import { DxDateBoxModule } from "devextreme-angular/ui/date-box";
import { DxDropDownBoxModule } from "devextreme-angular/ui/drop-down-box";
import { DxDropDownButtonModule } from "devextreme-angular/ui/drop-down-button";
import { DxFileUploaderModule } from "devextreme-angular/ui/file-uploader";
import { DxFormModule } from "devextreme-angular/ui/form";
import { DxGalleryModule } from "devextreme-angular/ui/gallery";
import { DxHtmlEditorModule } from "devextreme-angular/ui/html-editor";
import { DxListModule } from "devextreme-angular/ui/list";
import { DxLoadIndicatorModule } from "devextreme-angular/ui/load-indicator";
import { DxLoadPanelModule } from "devextreme-angular/ui/load-panel";
import { DxMapModule } from "devextreme-angular/ui/map";
import { DxNumberBoxModule } from "devextreme-angular/ui/number-box";
import { DxPieChartModule } from "devextreme-angular/ui/pie-chart";
import { DxPopoverModule } from "devextreme-angular/ui/popover";
import { DxPopupModule } from "devextreme-angular/ui/popup";
import { DxProgressBarModule } from "devextreme-angular/ui/progress-bar";
import { DxRadioGroupModule } from "devextreme-angular/ui/radio-group";
import { DxScrollViewModule } from "devextreme-angular/ui/scroll-view";
import { DxSelectBoxModule } from "devextreme-angular/ui/select-box";
import { DxSpeedDialActionModule } from "devextreme-angular/ui/speed-dial-action";
import { DxSwitchModule } from "devextreme-angular/ui/switch";
import { DxTabPanelModule } from "devextreme-angular/ui/tab-panel";
import { DxTabsModule } from "devextreme-angular/ui/tabs";
import { DxTagBoxModule } from "devextreme-angular/ui/tag-box";
import { DxTextAreaModule } from "devextreme-angular/ui/text-area";
import { DxTextBoxModule } from "devextreme-angular/ui/text-box";
import { DxTooltipModule } from "devextreme-angular/ui/tooltip";
import { DxValidatorModule } from "devextreme-angular/ui/validator";
import { DxActionSheetModule } from "devextreme-angular/ui/action-sheet";
import { DxMenuModule } from "devextreme-angular/ui/menu";

const DEV_EXTREME = [
    DxButtonModule,
    DxDataGridModule,
    DxTagBoxModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxTextBoxModule,
    DxPopoverModule,
    DxRadioGroupModule,
    DxLoadPanelModule,
    DxScrollViewModule,
    DxCheckBoxModule,
    DxTabsModule,
    DxLoadIndicatorModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxTooltipModule,
    DxDropDownBoxModule,
    DxAccordionModule,
    DxFileUploaderModule,
    DxNumberBoxModule,
    DxValidatorModule,
    DxDropDownButtonModule,
    DxHtmlEditorModule,
    DxGalleryModule,
    DxTabPanelModule,
    DxContextMenuModule,
    DxColorBoxModule,
    DxFormModule,
    DxPieChartModule,
    DxChartModule,
    DxListModule,
    DxProgressBarModule,
    DxSpeedDialActionModule,
    DxMapModule,
    DxSwitchModule,
    DxMenuModule,
    DxActionSheetModule,
];

@NgModule({
    imports: [CommonModule, DEV_EXTREME],
    declarations: [],
    exports: [DEV_EXTREME],
    providers: [],
    schemas: [],
})
export class SharedDevExtremeModule {}
