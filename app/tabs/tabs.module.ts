import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabTitleComponent, TabContentComponent, TabComponent],
  exports: [TabTitleComponent, TabContentComponent, TabComponent]
})
export class TabsModule { }