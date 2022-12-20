import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './main.table.component.html',
  styleUrls: ['./main.table.component.scss']
})
export class MainTableComponent implements OnInit{

  public todo: any[] = [];
  public done: any[] = [];
  public inProgress: any = [];
  public review: any[] = [];
  public huy: any;

  public itemTodo!: string;

  public todoH2: string = 'To do';
  public inProgressH2: string = 'In Progress';
  public reviewH2: string = 'Review';
  public doneH2: string = 'Done';

  public constructor(
    public boardService: BoardService,
  ) { }

  ngOnInit() {
  }

  public drop (event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public addItemsInTodo(title: string): void {
    title = this.itemTodo;
    this.boardService.addBoard(title,1, 1)
      .subscribe()

    this.itemTodo = '';
  }

  public deleteItemsTodo(value: any): void {
    let id_: string[] = [];
    const index = id_.indexOf(value);
    for (let item of this.huy){
      id_.push(item.id);
    }
      id_.splice(index, 1);
      this.boardService.deleteBoard(value.id)
        .subscribe()
    console.log(value.id);
  }

  public deleteItemsInProgress(value: string): void {
    const index = this.inProgress.indexOf(value);

    if (index >= 0) {
      this.inProgress.splice(index, 1);
      console.log(index);
    }
  }

  public deleteItemsReview(value: string): void {
    const index = this.review.indexOf(value);

    if (index >= 0) {
      this.review.splice(index, 1);
    }
  }

  public deleteItemsDone(value: string): void {
    const index = this.done.indexOf(value);

    if (index >= 0) {
      this.done.splice(index, 1);
    }
  }

  public getItems(): void {
    this.boardService.getBoard()
      .subscribe((huy: any) => {
        this.huy = huy.items;
        for(let item of this.huy){
          this.todo.push(item.title)
        }
      })
  }
}
