import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTableComponent } from './components/main.table/main.table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    MainTableComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
  ],
  exports: [
    MainTableComponent,
  ]
})
export class TableModule {}
