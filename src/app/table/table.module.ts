import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTableComponent } from './components/main.table/main.table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BoardService } from './services/board.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainTableComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
  ],
  exports: [
    MainTableComponent,
  ]
})
export class TableModule {}
